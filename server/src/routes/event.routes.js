import express from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import {
    createNewEventByUser,
    handleUpdateEventByUser,
    getAllEventsByUser,
    handleDeleteEventByUser,
    getEventsByFilter,
    getEventDetails,
    getEventByIdFromUser,
    getAllEvents,
    getEventsBySearch,
} from "../controllers/event.controller.js";

import {
    handleNewAnnouncement,
    handleAnnouncementDelete,
} from "../controllers/announcement.controller.js";

import {
    handleNewKeySpeaker,
    handleDeleteKeySpeaker,
} from "../controllers/keySpeaker.controller.js";

import { handleRegisterForEvent } from "../controllers/ticket.controller.js";

const router = express.Router();

// User created events (Admin)
router.get("/admin/:id", authenticateUser, getEventByIdFromUser);
router.get("/user/all", authenticateUser, getAllEventsByUser);
router.post("/create", authenticateUser, createNewEventByUser);
router.post("/update/:id", authenticateUser, handleUpdateEventByUser);
router.get("/delete/:id", authenticateUser, handleDeleteEventByUser);

// Publicly available events
router.get("/public/:id", getEventDetails);
router.get("/all", getAllEvents);
// TODO: Get all events by categories, tag, date (filter) & Search events
router.get("/filter", getEventsByFilter);
router.post("/search", getEventsBySearch);

router.post("/speaker/new", authenticateUser, handleNewKeySpeaker);
// TODO: Delete keySpeaker
router.post("/speaker/delete", authenticateUser, handleDeleteKeySpeaker);
router.post("/announcement/new", authenticateUser, handleNewAnnouncement);
router.post("/announcement/delete", authenticateUser, handleAnnouncementDelete);

// Register for events
router.post("/register/:id", authenticateUser, handleRegisterForEvent);

export default router;
