import express from "express";
import {
    handleSignup,
    handleLogin,
    handleLogout,
    requestPasswordReset,
    handlePasswordResetLink,
    handleNewPassword,
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
router.post("/forgot", requestPasswordReset);
router.get("/reset", handlePasswordResetLink);
router.post("/reset/password", authenticateUser, handleNewPassword);

export default router;
