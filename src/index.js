const { urlencoded } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')

//Configuraciones
app.set('port',process.env.PORT || 3000)



//Funcion que procesa datos antes de que el servidor los reciba
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//app.set('json spaces', 2)

//rutas
app.use(require('./routes/routes_index'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users', require('./routes/users'))

//Empezando el servidor
app.listen(app.get('port'), () => {

    console.log(`Server on port ${app.get('port')}`)
})