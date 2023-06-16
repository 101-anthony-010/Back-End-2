const Transfer = require("../models/transfer.model");
const catchAsync = require("../utils/catchAsync");

exports.transferUser = catchAsync(async (req, res) => {
    const { amount, senderUserId, receiverUserId } = req.body
    const { userSender, userReceiver } = req

    const transfer = await Transfer.create({
        amount,
        senderUserId,
        receiverUserId
      });
    
    res.status(200).json({
        status: 'success',
        message: "the user has been created",        
        transfer,
        userSender,
        userReceiver
    })
    // try {
    // } catch (error) {
    //     res.status(500).json({
    //         status: "Fail",
    //         message: "Something went wrong! Please try"
    //     })
    // }
})