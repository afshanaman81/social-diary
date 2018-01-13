require('dotenv').config()
require('./helpers/passport')

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const lessMiddleware = require('less-middleware')
const mongoose = require('mongoose')

const dbConfig = require('./helpers/db')


const app = express()

// Configuring Passport
const passport = require('passport')
const session  = require('cookie-session')
app.use(
    session({
        cookie: { maxAge: 60000 },
        secret: process.env.AUTH_SECRET,
        resave: false,
        saveUninitialized: false
    })
)
app.use(passport.initialize())
app.use(passport.session())

// database
mongoose.connect(dbConfig.url, {useMongoClient: true})


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


app.use(favicon(__dirname + '/public/images/favicon.ico'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(lessMiddleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// routes
const home = require('./routes/index.route')
const login = require('./routes/auth.route')
app.use('/', login)
app.use('/home', home)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
