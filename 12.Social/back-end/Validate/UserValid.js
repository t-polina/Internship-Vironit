const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        if (req.user.role === "Admin" || req.user.role === "User") next();
        else throw (new Error("Invalid Token"))
    } catch (e) {
        res.status(401).send(e.message);
    }
}
