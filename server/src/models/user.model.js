import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        resetToken: {
            type: String,
        },
        ticket: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Event",
        },
        // TODO: Profile photo -> Cloudinary
        profileImage: {
            type: String,
        },
    },
    { timestamps: true }
);

// Middlewares
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET
    );
};

const User = mongoose.model("User", userSchema);

export default User;
