require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');


const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//config tempalte engine
configViewEngine(app);

//routes init
app.use('/', webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})

