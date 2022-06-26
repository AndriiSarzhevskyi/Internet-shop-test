const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express();

const PORT = config.get('port');

app.use('/api/products', require('./routes/products.routes'));


async function start(){
    try{
        await mongoose.connect(config.get('mongoUri', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }));
        app.listen(PORT, ()=>console.log(`App started on port: ${PORT}...`));
    } catch(e){
        console.log("Server ERROR", e.message);
        process.exit(1);
    }
}

start()


