import jwt from "jsonwebtoken";

function authenticateUser(req, res, next) {
    try {
        const token = req.cookies.Authorization;
        if (!token) {
            return res
                .status(401)
                .send({ message: "Access denied. No token provided." });
        } else {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded;
            next();
        }
    } catch (err) {
        return res
            .status(401)
            .send({ message: "Access denied. No token provided." });
    }
}

export { authenticateUser };
