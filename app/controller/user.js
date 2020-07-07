const usermodel = require('../model/user')

module.exports = {

    create: function(req, res){
        const userInfo = new usermodel(req.body);
        userInfo.save()
                .then(result => {
                    return res.json({
                        success:true,
                        result
                    })
                }).catch(err => {
                    return res.json({
                        success:false,
                        err
                    })
                })
        
    },

    fetch: function(req, res){
        usermodel.find({status:true})
                    .then(result => {
                        return res.json({
                                success:true,
                                result
                            })
                        
                        
                    }).catch(err => {
                        return res.json({
                            success:false,
                            err
                        })
                    })
    },

    fetchById: function(req, res){
        usermodel.findById(req.params.id, (err, result) => {
            if(err){
                return res.json({
                    success:false,
                    err
                })
            }
            return res.json({
                success:true,
                result
            })
        })
    },

    update: function(req, res){
        usermodel.updateOne({_id: req.params.id}, req.body, (err, result) => {
            if(err){
                return res.json({
                    success:false,
                    err
                })
            }
            return res.json({
                success:true,
                result
            })
        })

    },

    delete: function(req, res){
        usermodel.updateOne({_id: req.params.id}, {status: false}, (err, result) => {
            if(err){
                        return res.json({
                            success:false,
                            err
                        })
                    }
            return res.json({
                        success:true,
                        result
            })
        })
        // usermodel.deleteOne({_id: req.params.id}, (err,result) => {
        //     if(err){
        //         return res.json({
        //             success:false,
        //             err
        //         })
        //     }
        //     return res.json({
        //         success:true,
        //         result
        //     })
        // })
    }

}