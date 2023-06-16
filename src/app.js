const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/error.controller')

//Routes
// const userRouter = require('./router/users.routes')
const authRouter = require('./router/auth.routes')
const transferRouter = require('./router/transfer.routes')

const app = express();

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Rutas
app.use("/api/v1/users", authRouter);
app.use("/api/v1/transfers", transferRouter);

app.all('*', (req, res, next) => {
    return next(
        new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
    )
})

app.use(globalErrorHandler)

module.exports = app;