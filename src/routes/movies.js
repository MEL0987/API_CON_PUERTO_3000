const { Router } = require('express')
const router = Router()
const _ = require('underscore')


const movies = require('../sample.json')
console.log(movies)

router.get('/', (req, res) => {
    res.json(movies)
})

//guardo los datos
router.post('/', (req, res)=>{
    const { title, director, Año, rating  }=req.body


    //comprobante si estan todos los datos
    if(title && director && Año && rating){
        const id = movies.length +1
        const newMovie = {...req.body, id}
        console.log(newMovie)
        movies.push(newMovie)
        res.json(movies)
    }else{
        res.status(500).json({error: 'Ocurrio un error'})
    }

    res.send('recived')
}) 

router.put('/:id', (req, res)=>{
    const {id} = req.params
    const { title, director, Año, rating  }=req.body
    if(title && director && Año && rating){
        _.each(movies,(movie,i)=> {
            if(movie.id == id){
                movie.title = title
                movie.director = director
                movie.Año = Año
                movie.rating = rating
            }
        })
        res.json(movies)
    }else{
        res.status(500).json({error: 'Faltan datos por agregar'})
    }

})



//ELIMINAR UN ARREGLO 
router.delete('/:id', (req, res)=> {
    const { id } = req.params
    _.each(movies, (movie, i)=>{
        if(movie.id == id) {
            movies.splice(i, 1)
        }
    })
    res.send(movies)
})

module.exports = router