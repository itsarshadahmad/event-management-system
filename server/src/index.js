import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import { app } from "./app.js";
import { sendNotification } from "./utils/notification.js";
import cron from "node-cron";

dotenv.config({
    path: "./.env",
});

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error;
        });
        app.listen(process.env.PORT || 5000, () => {
            console.log(`⚙️ Port is running on ${process.env.PORT}`);
        });

        cron.schedule(
            "0 1 * * *",
            () => {
                sendNotification();
            },
            {
                scheduled: true,
                timezone: "Asia/Kolkata",
            }
        );
    })
    .catch((err) => {
        console.log("MONGODB connection failed !!! ", err);
    });
