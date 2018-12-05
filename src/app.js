const express = require('express')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')
const morgan = require('morgan')
const mongoose = require('mongoose')

const indexRoutes = require('./routes/index')
const app = express()


mongoose.connect('mongodb://localhost/crud-mongo')
	.then(db => console.log('DB Connected'))
	.catch(err => console.log(err))

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Middlewares
app.use(sassMiddleware({
  src: __dirname,
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed'
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', indexRoutes)

app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})
