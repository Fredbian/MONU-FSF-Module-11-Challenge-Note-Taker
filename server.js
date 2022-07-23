// require modules
const express = require('express')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const port = process.env.PORT || 8888

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

// set server port
app.listen(port, () => console.log(`This app server is running at port${port}`))