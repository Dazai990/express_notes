const express = require('express');
const router = require('./controllers/my_router')
const paramRouter = require('./controllers/param_router')
const middlewareRouter = require('./middlewares/router_level_middlewares')
const skipMiddleware = require('./middlewares/skip_middleware_router')
const errorMiddleware = require('./middlewares/error_handling_middleware')
const staticMiddleware = require('./middlewares/static_middleware')
const bodyParserMiddleware = require('./middlewares/body_parser_demo')
const builtInMiddleware = require('./middlewares/built-in_middleware_demo')
const app = express()

//binding router object to path (route)
app.use('/hi',router);
app.use('/user',paramRouter);
app.use('/test-md',middlewareRouter);
app.use('/skip',skipMiddleware);
app.use('/check',errorMiddleware);
app.use('/hello',staticMiddleware);
app.use('/body-parser',bodyParserMiddleware)
app.use('/built-in',builtInMiddleware);


app.listen(4000,()=>console.log("server started at port 4000..."))