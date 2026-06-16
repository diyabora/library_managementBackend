import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
    try {
        //variable to store token coming from fronted's req
        //  req.header.authorization="Bearer diiya345678#$%^&g"
        const authToken = req.headers.authorization;

        //validate if there are no tolen inside headers
        if (!authToken || !authToken.startWith("Bearer")) {
            return res.status(401).json({
                message: "Access denied: No token provided",
            });
        }
        //extract token
        const token = authToken.slice(7); //split(" ")[1];

        //verify token
        const decode = Jwt.verify(token, "diya123");

        //store user data in request
        req.user = decode;

        //move to next
        next();
    }
    catch {
        return res.status(401).json({
            message: "invalid or expired token",
        })
    }
}

export default authMiddleware;