const { contactsService } = require("../../service/index")

const getContactById = async (req, res, next) => {
    const { id } = req.user;
    try {
        const data = await contactsService.getContactById(req.params.contactId, id)
        if (!data) {
            res.status(404).json({ "message": "Not found" })
            return
        }
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

module.exports = getContactById;