const express = require("express");
const router = express();

const User = require("../Models/User.js");

//list All Users
router.get("/users", async (req, res) =>{
    const allUsers = await User.findAll()
    try{
        if(!allUsers.length){
            res.status(404).json({
                msg:'database empty'
            })
        }else{
            res.status(200).json(allUsers)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//User by Id
router.get("/:id", async (req, res) => {
    const {id} = req.params
    try{
        const user = await User.findOne({
            where:{
                id: id 
            }
        })
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({
                msg: "User not found",
            })
        }
    }catch(error){
        res.status(500).json(error)
    }
})

//Update User (ADMIN)
router.put("/:id", async (req, res) => {
    
    const {id} = req.params;
    const {user_name, user_email, isAdmin} = req.body;

    try{
        const user = await User.findOne({
            where:{
                id: id
            }
        })

        if(!user){
            res.status(404).json({
                msg: 'User not Found'
            })
        }else{
            const userUpdate = await User.update({
                user_name: user_name,
                user_email: user_email,
                isAdmin: isAdmin
            },{
                where: {
                    id: id
                }
            })
            res.status(200).json({
                msg:'User Updated'
            })
        }
    }catch (error){
        res.status(500).json(error)
    }
});
//Delete User (ADMIN)
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const user = await User.destroy({
            where:{
                id: id
            }
        });
        res.status(200).json({msg: 'delete success'})
    }catch (error){
        res.status(500).json(error)
    }
})

module.exports = router