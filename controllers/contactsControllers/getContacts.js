const { contactsService } = require("../../service/index")

const getContacts = async (req, res, next) => {
    const { id } = req.user;
    try {
        const data = await contactsService.listContacts(id)
        if (!data) {
            res.status(404).json({ "message": "Not found" })
            return
        }
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

module.exports = getContacts;