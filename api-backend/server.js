const mongoose = require('mongoose');

const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config({path: './config.env'});
const DB_CONN = process.env.NODE_ENV === 'production' ?
                process.env.DATABASE_PRODUCTION.replace('<PWD>', process.env.DATABASE_PASSWORD) :
                process.env.DATABASE;

// This returns a promise so we can gain access to the
//Connection object using a .then()
mongoose.connect(DB_CONN)
    .then( conn =>{
      // console.log(conn.connections);
      console.log('Successfully connected to MongoDB!');
});

// 3) START SERVER
const port = 3000;
app.listen(port, ()=>{
  console.log(`Server Listening on Port ${port}...`);
})
