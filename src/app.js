require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//config tempalte engine
configViewEngine(app);

//routes init
app.use('/', webRouter);

//

//simple query
connection.query(
  'SELECT * FROM Users u',
   function(err, results, fields) {
    console.log(">>> Check results: ", results);
});


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})

