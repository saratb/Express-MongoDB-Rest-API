const express = require('express') //Bring in express backend JS
const dotenv = require('dotenv').config() //Dotenv
const port = process.env.PORT || 5000 //The port we are going to use. Gets from the .env file

const app = express() //Calling in express

app.get('/api/goals', (req, res) => { //get is the request we want to listen for (req, res) -> Request and response variable

  res.send('Get goals') // The message that would be sent

})

app.listen(port, () => console.log(`Server started on port ${port}`))
