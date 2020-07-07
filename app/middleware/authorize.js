const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
    authorize
}

function authorize(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded;
        next();
    } catch (err) {
        res.status(440).json({
            success: false,
            msg: 'Session Expired. Please Login Again.',
            error: err
        })
    }
}