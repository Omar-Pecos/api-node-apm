const express = require('express')
const {Router} = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('express-async-errors');

const {ApmRoutes} = require('./routes')
const {ErrorMiddleware,ValidationMiddleware, NotFoundMiddleware} = require('./middlewares')

const app = express();
const apiRouter = new Router();

apiRouter.use(cors());
apiRouter.use(bodyParser.json());

//routes

app.get('/',(req,res) =>{
    res.status(200).json({
        message : "Hello!!"
    })
})

apiRouter.use('/apm', ApmRoutes);

app.use('/api/v1', apiRouter);

// MY MIDDLEWARES
    //take care with chained middlewares - m1(err) => next(err) - m2(err) - etc
app.use(NotFoundMiddleware);
app.use(ValidationMiddleware);
app.use(ErrorMiddleware);

module.exports = app;