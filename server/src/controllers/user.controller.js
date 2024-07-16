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
    const { email, password } = req.body;

    if (email && password) {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            const isPasswordCorrect = await user.isPasswordCorrect(password);

            if (isPasswordCorrect) {
                const token = await user.generateAccessToken();
                return res
                    .status(200)
                    .cookie("Authorization", token, authOptions)
                    .json({
                        message: "User logged in successfully",
                    });
            } else {
                return res.status(400).json({ message: "Invalid password" });
            }
        }
    }
}

async function handleLogout(req, res) {
    return res
        .status(200)
        .clearCookie("Authorization", authOptions)
        .json({ message: "User logged out successfully" });
}

export { handleSignup, handleLogin, handleLogout };
