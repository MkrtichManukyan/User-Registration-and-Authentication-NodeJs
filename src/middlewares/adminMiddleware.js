const adminToken = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.json({ message: 'Access denied' });
    }

    next();
};

export { adminToken }