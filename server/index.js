const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require ('cors')
const tableRoutes = require ('./routes/tables')
const app = express()
app.use(cors())
app.use('/table',tableRoutes)
app.use(bodyParser.json({  extended: true }))
app.use(bodyParser.urlencoded({  extended: true }))




const connection_url='mongodb+srv://aziz:aziz123@cluster0.gpxg9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;
mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));