const login = async (req, res, next) => {
    try {
        console.log("req.body====>", req.body)
        res.send("ok")
    } catch (error) {
        next(error)
    }
}
module.exports = login;