const { userService } = require("../../service/index");

const current = async (req, res, next) => {
    const { email, id } = req.user;

    try {
        const user = await userService.findUserById(id)

        res.status(200).json({
            "email": email,
            "subscription": user.subscription
        })
    } catch (error) {
        next(error)
    }
}

module.exports = current;