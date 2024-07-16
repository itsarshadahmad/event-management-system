import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    {
        ok: "Initial Setup";
    }
});

export default router;
