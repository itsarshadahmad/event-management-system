import express from "express";
import {
    handleSignup,
    handleLogin,
    handleLogout,
} from "../controllers/user.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = express.Router();

// TODO: This is for testing purposes should remove before final build
router.get("/", authenticateUser, (req, res) => {
    res.send({
        200: "ok",
    });
});

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);

export default router;
