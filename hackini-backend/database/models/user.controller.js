const User = require('./user.model');
const jwt = require("jsonwebtoken")

exports.createUser = function(req, res){
    console.log(req.body);
    const {mail, userName, password} = req.body
    User.create({mail, userName, password}, function(err, User){
        if(err){
            return res.json({
                error : err
            })
        }
        return res.json({
            message : "user created !",
            User : User
        })
    }) 
}

exports.login =async function(req, res){
    const {mail, password} = req.body
    const user = await User.findOne({mail})

    if(await user.comparePasswords(password)){
        console.log("everything is fine");
        user.token = jwt.sign(
            {
                id : user._id,
                mail : user.mail
            },
            'secret key',
            {
                expiresIn : '3h'
            }
        )
        return res.json({
            message : "user is logged in",
            token : user.token,
            id : user._id,
            userName : user.userName,
        })
    }
    else
        res.status(401).json({
            message : "wrong password",
        })
}


