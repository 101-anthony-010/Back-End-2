const User = require('../models/user.model');

exports.signup = async (req, res) => {
    try {
        const { name, password } = req.body;
        const accountNumber = Math.floor(Math.random() * 900000) + 100000;

        const user = await User.create({
            name,
            password,
            accountNumber,
            amount: 1000,
          });

        res.status(200).json({
            status: 'success',
            message: "the user has been created",
            user
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Something went wrong! Please try"
        })
    }
}

exports.login = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Something went wrong! Please try"
        })
    }
}

exports.findUserHistory = async (req, res) => {
    try {
        const { id } = req.params
        res.status(200).json({
            status: "success",
            id
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Something went wrong! Please try"
        })
    }
}