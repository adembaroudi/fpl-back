var express = require("express");
var User = require("./../Models/UserSchema");
var bcrypt = require ('bcryptjs');
var router = express.Router();
router.post('/register', async (req, res) => {
    console.log(req);
    const user =  User (req.body);
        const uniqueUser = await User.findOne({email : req.body.email });
        if (uniqueUser) {
            return res.status(400).send({ message: "email already in use" });
        }
         else {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            await user.save();
            await user.findByIdAndUpdate(user._id)
            res.send(user);
        }  
     
});
module.exports = router;