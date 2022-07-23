// require modules
const express = require('express')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// create app
const app = express()

// set up express for handle data
app.use(express.urlencoded({
    extended: true
}))
// parsing json
app.use(express.json())
// html
app.use(express.static('public'))
// set up routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// set server port, port = 8888
app.listen(8888, () => {console.log(`This app server is running at port 8888..`)})