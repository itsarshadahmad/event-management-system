import { Resend } from "resend";
import Event from "../models/event.model.js";
import moment from "moment";

async function sendNotification() {
    const date = new Date();
    const event = await Event.find({
        date: new Date(`${moment().add(1, "day").format("YYYY-MM-DD")}`),
    });

    if (!event) return;

    if (event.length > 0) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const html = `
        <h1>Event Management System</h1>
        <p>
            Prepare yourself for ${event.title} is tomorrow.
            Hope you enjoy event.
        </p>
        <p>Thank You</p>
        <p>&copy; Event Management System</p>
        `;
        await resend.emails.send({
            from: "Event <onboarding@resend.dev>",
            to: user.email,
            subject: `${event.title} is tomorrow.`,
            html,
        });
    }
}

export { sendNotification };
