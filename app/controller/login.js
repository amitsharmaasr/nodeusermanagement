const userModel = require('../model/user')
const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = {
    login: function(req, res){
        userModel.find({'email': req.body.email, 'password': req.body.password, 'status':true})
            .then(result => {
                    const token = jwt.sign({ data: result[0]}, 
                        process.env.JWT_SECRET, {
                        expiresIn: '212h'
                    });

                    return res.json({
                        success: true,
                        token
                    })
            }).catch(err => {
                return res.json({
                    success: false,
                    err
                })
            })
    }
}