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
} from "../controllers/event.controller.js";

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

// TODO: Get latest events
// Filter upcoming events remove previous events
// TODO: Get all events by categories, tag, date (filter) -> Pagination
router.get("/filter", getEventsByFilter);

// TODO: CRUD for announcements
// TODO: CRUD for keySpeakers

export default router;
