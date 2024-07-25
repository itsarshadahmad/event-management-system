import User from "../models/user.model.js";
import Event from "../models/event.model.js";
import { Resend } from "resend";

async function handleRegisterForEvent(req, res) {
    try {
        const eventId = req.params.id;
        const user = req.user;
        if (!eventId && !user) {
            return res
                .status(403)
                .json({ message: "Invalid request! Bad credentials." });
        }

        const event = await Event.findOne({ _id: eventId });
        const isAlreadyRegistered = event.attendees.includes(user._id);

        if (event.capacity) {
            if (event.attendees.length >= event.capacity) {
                return res
                    .status(409)
                    .json({ message: "Event capacity reached." });
            }
        }

        if (isAlreadyRegistered) {
            return res
                .status(409)
                .json({ message: "User already registered for this event." });
        }

        await event.updateOne({ $push: { attendees: user._id } });
        const regUser = await User.findByIdAndUpdate(
            { _id: user._id },
            {
                $push: {
                    ticket: event._id,
                },
            }
        );

        const resend = new Resend(process.env.RESEND_API_KEY);
        const html = `
        <h1>Event Management System</h1>
        <p>
            Thanks for registering for ${event.title} on ${event.date}.
            Add it your calendar and we will remind day before the event.
        </p>
        <p>Thank You</p>
        <p>&copy; Event Management System</p>
        `;

        await resend.emails.send({
            from: "Event <onboarding@resend.dev>",
            to: user.email,
            subject: `Registration for ${event.title} successfully.`,
            html,
        });

        return res.status(200).json({
            message: "Registration successful",
            event,
            user: regUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error registering for event",
            error: error.message,
        });
    }
}

export { handleRegisterForEvent };
