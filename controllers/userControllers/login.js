const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const { userService } = require("../../service/index");
const { userSchema } = require("../../JoiSchema/index");

const login = async (req, res, next) => {
    try {
        const { value, error } = await userSchema.validate(req.body);

        if (error !== undefined) {
            const [{ message }] = error.details;
            return res.status(400).json({ "message": `Bad Request! ${message}` })
        }

        const { email, password } = value;

        const user = await userService.findOneUser(email);
        console.log("user ===>>", user)
        if (user === null) {
            return res.status(401).send({ "message": "Email or password is incorrect!" })
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ "message": "Email or password is wrong" });
        }

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SIGN);

        const updatedUser = await userService.findUserByIdandUpdate(user._id.toString(), { token }, { set: true })

        res.status(200).json({
            "token": token,
            "user": {
                "email": updatedUser.email,
                "subscription": updatedUser.subscription
            }
        })
    } catch (error) {
        next(error)
    }
}
module.exports = login;