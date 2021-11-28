const express = require('express');
const app = express();
const eJWT = require('./middlewares/expressJWT')
const {PORT} = require('./config/config')
const port = parseInt(PORT) || 3000;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//DB
require('./DB/db');

//Swagger(Documentation)
const swaggerOptions = require('./utils/swaggerOptions');
const swaggerSpecs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

//Middlewares
app.use(express.json());
app.use(eJWT.midexJWT, eJWT.valitorJWT);

//Paths
app.use('/account', require('./routes/account.route'));
app.use('/myplaylists', require('./routes/playList.router'));

//Listen Port 
app.listen(port, () => {
    console.log(`Server in Port ${port}`)
});

module.exports = app;