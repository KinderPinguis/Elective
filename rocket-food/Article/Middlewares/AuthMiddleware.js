const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Authorization token is required' });

    try {
        req.user = jwt.verify(token, process.env.ACCESS_JWT_KEY || '');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
