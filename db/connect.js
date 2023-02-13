const Mongoose = require("mongoose");


//url local : mongo://localhost:27017/dbname
Mongoose.connect('mongodb+srv://amine:124578@db.2fcxjp6.mongodb.net/gl-b-23?retryWrites=true&w=majority')
    .then(()=>console.log('MongoDB is connected'))
    .catch(err=>console.error('MongoDB not connected, error :',err));

