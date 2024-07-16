import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes imports
import usersRoutes from "./routes/user.routes.js";
import eventsRoutes from "./routes/event.routes.js";

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/event", eventsRoutes);

export { app };
