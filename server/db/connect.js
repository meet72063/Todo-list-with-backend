const mongo = require('mongoose')

const connectDB = (url)=>{
    mongo.connect(url,  { useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    }
       
    )
}

module.exports = connectDB