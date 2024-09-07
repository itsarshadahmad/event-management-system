import { Resend } from "resend";
import { randomUUID } from "node:crypto";
import User from "../models/user.model.js";

const authOptions = {
    httpOnly: true,
    secure: true,
};

async function handleSignup(req, res) {
    try {
        const { fullName, email, password, role } = req.body;

        if (fullName && email && password) {
            const user = await User.create({ fullName, email, password, role });
            const token = await user.generateAccessToken();

            return res
                .status(201)
                .cookie("Authorization", token, authOptions)
                .json({
                    message: "User created successfully",
                });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error creating user",
            error: error.message,
        });
    }
}

async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;

        if (email && password) {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const isPasswordCorrect = await user.isPasswordCorrect(password);

            if (isPasswordCorrect) {
                const token = await user.generateAccessToken();
                return (
                    res
                        .status(200)
                        // .cookie("Authorization", token, authOptions)
                        .json({
                            Authorization: token,
                            // message: "User logged in successfully",
                        })
                );
            } else {
                return res.status(400).json({ message: "Invalid password" });
            }
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error logging in user",
            error: error.message,
        });
    }
}

async function handleLogout(req, res) {
    return res
        .status(200)
        .clearCookie("Authorization", authOptions)
        .json({ message: "User logged out successfully" });
}

async function requestPasswordReset(req, res) {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found!" });

        const generatedToken = randomUUID();
        const resend = new Resend(process.env.RESEND_API_KEY);
        const timestamp = Date.now();
        const html = `
        <h1>Event Management System</h1>
        <h3>Reset Password</h3>
        <p>
        <a href="http://localhost:8000/api/v1/users/reset?token=${generatedToken}&timestamp=${timestamp}">
        Click Here</a>
        </p>
        <p>
        <a href="http://localhost:8000/api/v1/users/reset?token=${generatedToken}&timestamp=${timestamp}">
        http://localhost:8000/api/v1/users/reset?token=${generatedToken}&timestamp=${timestamp}</a>
        </p>
        `;

        await resend.emails.send({
            from: "Event <onboarding@resend.dev>",
            to: user.email,
            subject: "Reset Your Password",
            html,
        });

        await user.updateOne({ resetToken: generatedToken });

        return res
            .status(200)
            .json({ message: "Request sent! Check your email." });
    } catch (error) {
        return res.status(500).json({
            message: "Error in requesting password reset",
            error: error.message,
        });
    }
}

async function handlePasswordResetLink(req, res) {
    try {
        const { token, timestamp } = req.query;
        if (token && timestamp) {
            const isValidTimestamp =
                (Date.now() - timestamp) / 60000 <= 30 ? true : false;

            if (!isValidTimestamp) {
                return res.status(400).json({ message: "Token expired" });
            }

            const user = await User.findOne({ resetToken: token });
            if (!user) {
                return res.status(400).json({ message: "Invalid request" });
            }

            const jwtToken = await user.generateAccessToken();
            await user.updateOne({ resetToken: null });

            return res
                .status(200)
                .cookie("Authorization", jwtToken, authOptions)
                .json({
                    message: "Validation completed! Please reset the password.",
                });
        }
        return res.status(400).json({ message: "Invalid request" });
    } catch (error) {
        return res.status(500).json({
            message: "Error validating token",
            error: error.message,
        });
    }
}

async function handleNewPassword(req, res) {
    try {
        const { newPassword } = req.body;
        const user = await User.findOne({ email: req.user.email });
        if (user) {
            const hashedPassword = await user.hashPassword(newPassword);
            await user.updateOne({ password: hashedPassword });

            return res
                .status(200)
                .json({ message: "Password updated successfully" });
        }

        return res.status(400).json({ message: "Bad Request" });
    } catch (error) {
        return res.status(500).json({
            message: "Error updating password",
            error: error.message,
        });
    }
}

export {
    handleSignup,
    handleLogin,
    handleLogout,
    requestPasswordReset,
    handlePasswordResetLink,
    handleNewPassword,
};
