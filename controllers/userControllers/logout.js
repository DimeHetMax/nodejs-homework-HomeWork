const logout = async (req, res, next) => {
    try {
        res.status(204).end()
    } catch (error) {
        next(error)
    }
}
module.exports = logout;