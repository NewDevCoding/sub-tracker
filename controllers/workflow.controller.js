import dayjs from 'dayjs';

import { createRequire } from 'module'
import Subscription from '../models/subscription.model';
const require = createRequire(import.meta.url)
const { serve } = require('@upstash/workflow/express')


const reminders = [7, 5, 2, 1];

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;

    const subscription = await fetchSubscription(constext, subscriptionId)

    if(!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);

    if(renewalDate.isBefore(dayjs())){
        console.log(`Renewal date has passed for ${subscription.id}. Stopping workflow`)
        return;
    }

    for (const daysBefore of REMINDERS){
        const reminderDate = renewalDate.subtract(daysBefore, 'day');

        if(reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context,  `Reminder ${daysBefore} days before`, reminderDate)
        }

        await triggerReminder(context, `Reminder ${daysBefore} days before`)
    }
})


const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email')\
    
    })
}

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} at ${date}`);

    await context.sleepUntil(label, date.toDate())
}

const triggerReminder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
    })
}