const Transfer = require("../models/transfer.model")
const User = require("../models/user.model")
const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")

exports.validTransfer = catchAsync(async (req, res, next) => {
    
    const { amount, senderUserId, receiverUserId } = req.body

    const userSender = await User.findOne({
        where: {
            accountNumber: senderUserId
        }
    })
    
    if (!userSender) {
        return next(
            new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
            )   
        }

    req.userSender = userSender

    const userReceiver = await User.findOne({
        where: {
            accountNumber: receiverUserId
        }
    })
    
    if (!userReceiver) {
        return next(
            new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
            )   
        }
        
    req.userReceiver = userReceiver

    if ((userSender.amount - amount) > 0) {
        await userSender.update({ amount: userSender.amount - amount})
        await userReceiver.update({ amount: userReceiver.amount + amount})
    } else {
        return res.status(400).json({
            status: "error",
            message: "amount invalid"
        })
    }

    next()
})