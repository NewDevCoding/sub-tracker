import mongoose from "mongoose";

import { DB_URI, NODE_ENV} from "../config/env";

if(!DB_URI){
    throw new Error("Please define the DB_URI in the .env file");
}

const connectToDatabase = async () => {
    try {
        
    } catch (error) {
        console.log("Error connecting to the database", error);

        process.exit(1);
    }
}