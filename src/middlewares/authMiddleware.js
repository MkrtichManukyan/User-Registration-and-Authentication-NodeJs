import jwt from "jsonwebtoken";
import "dotenv/config";

const authToken = (req, res, next) => {
    const token = req.header('Authorization');
    const secretKey = process.env.SecretKey;

    try {
        const decoded = jwt.verify(token, secretKey);
        
        req.user = decoded;
        
        next();
    } catch (err) {
        res.json({ message: 'Invalid token.' });
    }
};

export { authToken }