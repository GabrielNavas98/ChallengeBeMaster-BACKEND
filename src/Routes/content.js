const express = require("express");
const router = express();
const axios = require('axios');
const { API_KEY } = process.env;


const Content = require("../Models/Content.js");
const Category = require("../Models/Category.js");

//API Movie (content) MostPopular
const getApiMovie = async () => {
    const arrayMovie = [];
    const dataMovie = [];
    const infoGenres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
        for(let i = 1; i < 2; i++) {
            const apiMovie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${i}`);
            arrayMovie.push(apiMovie.data.results)
            arrayMovie.flat().length
        }
        arrayMovie[0].forEach(movie => {
            let poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`
            const movieCategories = []
            movie.genre_ids.forEach(genre => {
                infoGenres.data.genres.forEach( gen => {
                    if(genre === gen.id){
                        movieCategories.push({name: gen.name})
                    }
                });
            });
            dataMovie.push({
                id: movie.id,
                title: movie.title,
                release: movie.release_date,
                rating: movie.vote_average,
                description: movie.overview,
                poster: poster,
                categories: movieCategories         
            })
        });
    return dataMovie
};
//API Movie (content) upcoming Movies (need be userAdmin)
const getUpcomingMovies = async () => {
    const upcomingMovie = [];
    const infoMovie = [];
    const infoGenres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
        for(let i = 1; i < 2; i++) {
            const apiMovie = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${i}`);
            upcomingMovie.push(apiMovie.data.results)
            upcomingMovie.flat().length
        }
        upcomingMovie[0].forEach(movie => {
            let poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`
            const movieCategories = []
            movie.genre_ids.forEach(genre => {
                infoGenres.data.genres.forEach( gen => {
                    if(genre === gen.id){
                        movieCategories.push({name: gen.name})
                    }
                });
            });
            infoMovie.push({
                id: movie.id,
                title: movie.title,
                release: movie.release_date,
                rating: movie.vote_average,
                description: movie.overview,
                poster: poster,
                categories: movieCategories         
            })
        });
    return infoMovie
};

//DataBase Movie (content)
const getDBMovies = async () => {
    return await Content.findAll({
        include:[{
            model: Category,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }]
    })
};

const getAllMovies = async () => {
    const apiMovie = await getApiMovie();
    const dbMovie = await getDBMovies();
    const allMovie = apiMovie.concat(dbMovie);
    return allMovie
};

//create content
router.post('/create', async (req, res) => {
    const {title, description, categories, release, poster, rating} = req.body;
    try{
        const newContent = await Content.create({
            title: title,
            release: release,
            description: description,
            rating: rating,
            poster: poster
        });

        const categoryDB = await Category.findAll({
            where: {
                name: categories
            }
        });

        await newContent.addCategories(categoryDB);

        res.status(200).json({
            msg: 'Content Create',
            newContent
        })
    }catch(error){
        res.status(500).json(error)
    }
});

//list All Content
router.get('/', async (req, res) => {
    try{
        const allContent = await getAllMovies()
        res.status(200).json(allContent)
    }catch(error){
        res.status(500).json(error)
    }
});

//list Content Upcoming
router.get('/upcoming', async (req, res) => {
    try{
        const moviesUpcoming = await getUpcomingMovies()
        res.status(200).json(moviesUpcoming)
    }catch(error){
        res.status(500).json(error)
    }
});

//content by id (detail)
const getApiMovieDetail = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const info = {
        id: data.id,
        title: data.title,
        poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
        categories: data.genres.map(gen => {
            return {
                name: gen.name
            }
        }),
        description: data.overview,
        release: data.release_date,
        rating: data.vote_average,
    }
    return info
};
const getDBMovieDetail = async (id) => {
    let movie = await Content.findByPk(id, {
        include: [{
            model: Category,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]        
    })
    return movie
}

router.get('/:id', async (req, res) => {
    const {id} = req.params
    if(id.length < 10){
        try{
            res.status(200).json(await getApiMovieDetail(id))
        }catch(err){
            res.status(404).json({msg: `movie ${id} not found in API`})
        }
    }else {
        try{
            res.status(200).json(await getDBMovieDetail(id))
        }catch(err){
            res.status(404).json({msg: `movie not foud......`})
        }
    }
})

//update content
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title, description, categories, released, poster, rating} = req.body
    try{
        const content = await Content.findOne({
            where:{
                id: id
            },include:{
                model: Category,
                attributes: ['name'],
                through:{
                    attributes:[]
                }
            }
        })
        if(!content){
            res.status(404).json({
                msg: 'Content not Found'
            })
        }else{
            const contentUpdate = await Content.update({
                title: title,
                release: released,
                description: description,
                rating: rating,
                poster: poster
            },{
                where: {
                    id: id
                }
            });

            let categoriesId = await Category.findAll({
                where:{
                    name: categories
                }
            })
            content.removeCategories();
            content.setCategories(categoriesId)
            content.save();
            
            res.status(200).json({
                msg:'Content Updated',
                contentUpdate
            })
        }
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router