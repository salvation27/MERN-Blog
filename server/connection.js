const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.hxb2r.mongodb.net/mernBlog?retryWrites=true&w=majority`,()=>{
    console.log('connected mongoDB')
})