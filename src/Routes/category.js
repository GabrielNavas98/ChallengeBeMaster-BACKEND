const express = require("express");
const router = express();
const axios = require('axios');
const { API_KEY } = process.env;

const Categories = require("../Models/Category.js");

const apiCategories = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    data.genres.forEach(cat => {
        Categories.findOrCreate({
            where:{
                name: cat.name
            }
        })
    });
    const allCategories = await Categories.findAll();
    return allCategories
};

//list All Categories
router.get('/', async (req,res) => {
    try{
        res.status(200).json(await apiCategories())
    }catch(error){
        res.status(500).json(error)
    }
});

//category by Id
router.get('/:id', async (req, res) => {
    const {id} = req.params
    try{
        const category = await Categories.findOne({
            where:{
                id: id
            }
        })
        if(!category){
            res.status(404).json({
                msg: "Category not Found"
            })
        }else{
            res.status(200).json(category)
        };
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;