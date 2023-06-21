
const express = require('express')
const connectDB = require('./db/connect')
require('dotenv').config()
const Todorouter = require('./Routes/routes')
const cors = require('cors')



const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api/v1/todo',Todorouter)




port = process.env.port||3000;

const start = async()=>{
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port,()=>{
         console.log(`server is listening on the ${port}...`)
    })
    } catch (error) {
        console.log(error)
    }
}

start()
