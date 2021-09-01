const express = require('express')
require('dotenv').config()
const router = require('./routes/routes') // Retreive the web endpoints //! change name??
const apiRoutes = require('./routes/api') // Retreive the API endpoints //! change name??



const app = express()
const port = process.env.PORT

// Uso de archivos estáticos
app.use(express.static('public'))

// Motor de vistas
app.set('view engine', 'pug')
app.set('views', './views')

//Middlewares
app.use(express.json()) //Para convertir a JSON
app.use(express.urlencoded({ extended: false }))

app.use('/', router) // Web endpoints
app.use('/api', apiRoutes) // API endpoints


// Control de error en caso de que se escriba una URL erronea
app.get('*', (req, res) => {
    res.status(404).send({ message: "Route " + req.url + " Not found." })
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })