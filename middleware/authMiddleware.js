const jwt = require("jsonwebtoken");

const { userService } = require("../service/index")

const authMiddleware = (req, res, next) => {
    const [bearer, token] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer") {
        res.status(401).json({ "message": "Not authorized" })
    }

    jwt.verify(token, process.env.JWT_SIGN, async (err, decoded) => {

        if (err) {
            res.status(401).json({ "message": "Not authorized" })
        }

        try {
            const user = await userService.findUserById(decoded.id)
            if (!user) {
                return res.status(401).send({ "message": "Not authorized" })
            }
            if (user.token !== token) {
                return res.status(401).send({ "message": "Not authorized" })
            }
            req.user = { email: user.email, id: user._id }
            next()
        } catch (error) {
            next(error)
        }
    });
}

module.exports = authMiddleware