import Event from "../models/event.model.js";

async function handleNewKeySpeaker(req, res) {
    try {
        const { name, bio, topic, eventId } = req.body;
        if (!name || !bio || !topic || !eventId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const event = await Event.findById({ _id: eventId }).updateOne({
            $push: { KeySpeaker: { name, bio, topic } },
        });

        if (!event) new Error("Couldn't find event");

        return res.status(200).json(event);
    } catch (error) {
        return res.status(400).json({
            message: "Invalid request! Error in creating new Key Speaker",
            error: error.message,
        });
    }
}

async function handleDeleteKeySpeaker(req, res) {
    try {
        const { keySpeakerId, eventId } = req.body;
        if (!keySpeakerId || !eventId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // TODO: Unable to remove key speaker
        const event = await Event.findById({ _id: eventId }).updateOne({
            $pull: { keySpeaker: { _id: keySpeakerId } },
        });

        if (!event) new Error("Couldn't find event");

        return res.status(200).json(event);
    } catch (error) {
        return res.status(400).json({
            message: "Invalid request! Error in deleting Key Speaker",
            error: error.message,
        });
    }
}

export { handleNewKeySpeaker, handleDeleteKeySpeaker };
