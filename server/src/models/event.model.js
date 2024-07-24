import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date(),
        required: true,
    },
});

const KeySpeakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    topic: {
        type: String,
        required: true,
    },
});

const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        date: {
            type: Date,
            required: true,
        },
        venue: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
        },
        attendees: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
        },
        tag: {
            type: String,
            enum: [
                "Workshop",
                "Seminar",
                "Conference",
                "Meetup",
                "Bootcamp",
                "Other",
            ],
            required: true,
        },
        categories: {
            type: [String],
            required: true,
        },
        organizer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        duration: {
            type: Number,
        },
        announcement: {
            type: [AnnouncementSchema],
        },
        KeySpeaker: {
            type: [KeySpeakerSchema],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Event", EventSchema);
