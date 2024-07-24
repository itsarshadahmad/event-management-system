import Event from "../models/event.model.js";

async function handleNewAnnouncement(req, res) {
    try {
        const { title, description, eventId } = req.body;
        const event = await Event.findById({ _id: eventId }).updateOne({
            $push: { announcement: { title, description } },
        });

        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({
            message: "Error in creating new announcement",
            error: error.message,
        });
    }
}

async function handleAnnouncementDelete(req, res) {
    try {
        const { eventId, announcementId } = req.body;
        const event = await Event.findById({ _id: eventId }).updateOne({
            $pull: { announcement: { _id: announcementId } },
        });

        return res.status(200).json({ event });
    } catch (error) {
        return res.status(500).json({
            message: "Error in deleting announcement",
            error: error.message,
        });
    }
}

export { handleNewAnnouncement, handleAnnouncementDelete };
