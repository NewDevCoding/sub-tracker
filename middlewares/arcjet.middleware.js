import aj from "/config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);
        if (decision.isDenied()) {
            if(decision.reason.isRateLimit){return res.status(429).json({error: "Rate limit exceeded"});}
        
            if(decision.reason.isBot){return res.status(403).json({error: "Bot Detected"});}

            return res.status(403).json({error: "Access Denied"});
        }

        next()
        
    } catch (error) {
        console.error(`Arcjet middleware error: ${error}`);
        next()
    }
}

export default arcjetMiddleware;