const express = require('express');
const bycrpt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const User = require('./../Models/UserSchema');
const router = express.Router();
router.post('/login', async(req,res)=>{
  console.log(res);
    const user = await User.findOne({email: req.body.email});
    const ValidEmailUser = user ? user.email : undefined;
    if (ValidEmailUser) {
        if (user) {
            const validPassUser = await bycrpt.compare(
                req.body.password,
                user.password
              );
              if (!validPassUser) {
                return res.status(401).send({ message: "wrong email or password" }); // verification validité password condidat//   
              } else {
                let token = jwt.sign({
                    data:user
                 
                },
                "secret");
                res.send({ message: token});
              }
        }
    } else {
     return res.status(401).send({ message: "wrong email or password" });   
    }
});
module.exports = router;