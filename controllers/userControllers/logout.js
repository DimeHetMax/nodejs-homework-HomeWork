const { userService } = require("../../service/index")

const logout = async (req, res, next) => {
    try {
        const { id } = req.user;

        const user = await userService.findUserById(id)
        if (!user) {
            res.status(401).end({ "message": "Not authorized" })
        }
        await userService.findUserByIdandUpdate(user._id, { token: null })
        res.status(204).end()
    } catch (error) {
        next(error)
    }
}
module.exports = logout;