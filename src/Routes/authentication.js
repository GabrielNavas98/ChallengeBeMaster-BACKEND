const express = require("express");
const router = express();

const User = require("../Models/User.js");
const bcrypt = require("bcrypt")
const { generateToken } = require('../Utils/generateToken.js')

//register User
router.post("/register", async (req, res) => {
    const {user_name, user_email, password} = req.body;
    const adminUser = await User.findOrCreate({
        where:{
            user_email: "admin@gmail.com"
        },defaults:{
            user_name: "admin",
            password: bcrypt.hashSync("admin123", 10),
            isAdmin: true
        }
    })
    const [newUser, created] = await User.findOrCreate({
        where: {
            user_email: user_email
        },
        defaults:{
            user_name: user_name,
            password: bcrypt.hashSync(password, 10)
        }
    })
    try{
        if(created){
            res.status(201).json({
                msg: "User created",
                user: newUser
            })
        }else{
            res.status(400).json({
                msg: "user already registered",
                
            })
        }
    } catch (error){
        res.status(500).json(error)
    }
});

//login User
router.post("/login", async (req, res, next) => {
    const { user_email, password } = req.body;
    const user = await User.findOne({
        where:{
            user_email: user_email
        }
    });

    try{
        if(!user) {
            res.status(200).json({
                msg: 'User not resgistered',
            })
        }else{
            const passwordIsValid = bcrypt.compareSync(password, user.password)
            if(passwordIsValid){
                console.log(user.id)
                res.status(200).json({
                    msg: 'Welcome',
                    info:{
                        id: user.id,
                        user_name: user.user_name,
                        user_email: user.user_email,
                        isAdmin: user.isAdmin,
                        token: generateToken(user)
                    }
                })
            }else{
                res.status(200).json({
                    msg: 'Invalid email or password'
                })
            }
        }
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router