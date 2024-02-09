const { contactsService } = require("../../service/index")

const getContacts = async (_, res, next) => {
    try {
        const data = await contactsService.listContacts()
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