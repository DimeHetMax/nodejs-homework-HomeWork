const { userService } = require("../../service/index");
const { verifySchema } = require("../../JoiSchema/index");
const { v4: uuidv4 } = require('uuid');
const mail = require("../../mail");

const resendEmail = async (req, res, next) => {
    try {
        const { value, error } = await verifySchema.validate(req.body);

        if (error !== undefined) {
            return res.status(400).json({ "message": `missing required field email` })
        }

        const user = await userService.findOneUser(value.email)
        if (user === null) {
            return res.status(400).json({ "message": "Bad Request!" })
        }

        if (user.verify) {
            return res.status(400).json({ "message": "Verification has already been passed" });
        }

        const verifyToken = uuidv4();

        await userService.findOneByEmailandUpdate(value.email, verifyToken);

        mail.sendMail({
            to: value.email,
            from: "dimehinm@gmail.com",
            subject: "Verify your registration",
            html: `Hey! We are resending a verification link: <a href="http://localhost:3000/users/verify/${verifyToken}">Click me</a>`,
            text: `Hey!  We are resending a verification link: http://localhost:3000/users/verify/${verifyToken}`,
        })

        res.status(200).json({
            "message": "Verification email sent"
        });
    } catch (error) {
        next(error)
    }
}

module.exports = resendEmail;