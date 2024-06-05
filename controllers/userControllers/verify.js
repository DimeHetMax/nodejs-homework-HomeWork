const { userService } = require("../../service/index");

const verify = async (req, res, next) => {

    const { token } = req.params;

    try {
        const user = await userService.findOneByToken(token);
        if (user === null) {
            return res.status(404).json({
                "message": 'User not found'
            })
        }
        await userService.findOneByTokenAndUpdate(token);
        res.status(200).json({
            "message": 'Verification successful'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = verify