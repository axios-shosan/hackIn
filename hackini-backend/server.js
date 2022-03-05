require("dotenv").config()
const express = require("express"),
    userRouters = require("./routes/user.routes"),
    {isLoggedIn} = require("./middleware/auth"),
    app = express(),
    PORT = process.env.PORT || 4000,
    cors = require('cors');

    require('./database/database.conf').connect()

    app.use(cors())
    app.use(express.json())
    app.use('/user', userRouters)
    // app.use('/tasks', isLoggedIn)
    // app.use('/tasks', taskRouters)

app.listen(PORT, console.log(`listening on PORT ${PORT}`))