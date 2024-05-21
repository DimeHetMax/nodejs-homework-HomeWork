const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { userService } = require("../../service/index")
const { userSchema } = require("../../JoiSchema/index");

const register = async (req, res, next) => {
    try {
        const { value, error } = userSchema.validate(req.body);
        if (error !== undefined) {
            const [{ message }] = error.details;
            return res.status(400).json({ "message": `Bad Request! ${message}` })
        }
        const hashedPassword = await bcrypt.hash(value.password, 10)

        const avatar = gravatar.url(value.email, { s: '200', r: 'pg', d: 'mm', protocol: 'https' });

        const newUser = await userService.addUser({ email: value.email, password: hashedPassword, avatarURL: avatar })

        res.status(201).json({ "user": newUser })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                "message": "Email in use"
            })
        }
        next(error.code)
    }
}

module.exports = register;
