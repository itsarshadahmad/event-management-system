import Event from "../models/event.model.js";

async function createNewEventByUser(req, res) {
    try {
        const user = req.user;
        const {
            title,
            description,
            date,
            venue,
            tag,
            categories,
            capacity,
            duration,
            KeySpeaker,
        } = req.body;

        if (!title || !description || !date || !venue || !tag || !categories) {
            return res.status(400).json({
                message:
                    "Missing required fields: title, description, date, venue, tag, categories",
            });
        }

        await Event.create({
            title,
            description,
            date,
            venue,
            tag,
            categories,
            organizer: user._id,
            capacity,
            duration,
            KeySpeaker,
        });

        return res.status(201).json({ message: "Event created successfully!" });
    } catch (error) {
        return res.status(500).json({
            message: "Error creating event",
            error: error.message,
        });
    }
}

async function getAllEventsByUser(req, res) {
    try {
        const user = req.user;
        const events = await Event.find({ organizer: user._id });

        if (!events) {
            return res
                .status(404)
                .json({ message: "No events found for this user" });
        }

        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({
            message: "Error retrieving user events",
            error: error.message,
        });
    }
}

async function getEventByIdFromUser(req, res) {
    try {
        const eventId = req.params.id;
        const user = req.user;
        const event = await Event.findOne({
            _id: eventId,
            organizer: user._id,
        });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({
            message: "Error retrieving user event by ID",
            error: error.message,
        });
    }
}

async function handleUpdateEventByUser(req, res) {
    try {
        const eventId = req.params.id;
        const user = req.user;
        const event = await Event.findOne({ _id: eventId });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        if (event.organizer.toString() !== user._id.toString()) {
            return res
                .status(403)
                .json({ message: "Unauthorized to update this event" });
        }
        const {
            title,
            description,
            date,
            venue,
            tag,
            categories,
            capacity,
            duration,
            announcement,
            keySpeaker,
        } = req.body;

        if (
            !title &&
            !description &&
            !date &&
            !venue &&
            !tag &&
            !categories &&
            !capacity &&
            !duration &&
            !announcement &&
            !keySpeaker
        ) {
            return res.status(400).json({
                message:
                    "Missing required fields: title, description, date, venue, tag, categories, capacity, duration, announcement, keySpeaker",
            });
        }

        await event.updateOne({
            title,
            description,
            date,
            venue,
            tag,
            categories,
            capacity,
            duration,
            keySpeaker,
        });

        return res.status(200).json({ message: "Event updated successfully!" });
    } catch (error) {
        return res.status(500).json({
            message: "Error updating event",
            error: error.message,
        });
    }
}

async function handleDeleteEventByUser(req, res) {
    try {
        const user = req.user;
        const eventId = req.params.id;
        const event = await Event.findById({ _id: eventId });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        if (event.organizer.toString() !== user._id.toString()) {
            return res
                .status(403)
                .json({ message: "Unauthorized to delete this event" });
        }

        await event.deleteOne({ _id: event.id });
        return res.status(200).json({ message: "Event deleted successfully!" });
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting event",
            error: error.message,
        });
    }
}

async function getEventsByFilter(req, res) {
    try {
        const { tag, categories, date } = req.query;
        if (!tag && !categories && !date) {
            new Error("Invalid filter");
        }

        const events = await find({ tag, categories, date });
        if (!events) {
            return res
                .status(404)
                .json({ message: "No events found with the given filter" });
        }

        return res.status(200).json(events);
    } catch (error) {
        return res.status(400).json({
            message:
                "Invalid filter parameters. Please provide tag, categories, or date query parameters.",
        });
    }
}

async function getEventDetails(req, res) {
    try {
        const eventId = req.params.id;
        const event = await Event.findById({ _id: eventId });
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({
            message: "Error retrieving event details",
            error: error.message,
        });
    }
}

async function getAllEvents(req, res) {
    try {
        const events = await Event.find({});
        if (!events) {
            return res.status(404).json({ message: "No events found" });
        }
        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({
            message: "Error retrieving all events",
            error: error.message,
        });
    }
}

export {
    createNewEventByUser,
    handleUpdateEventByUser,
    getAllEventsByUser,
    handleDeleteEventByUser,
    getEventsByFilter,
    getEventDetails,
    getEventByIdFromUser,
    getAllEvents,
};
