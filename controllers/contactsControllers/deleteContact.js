const { contactsService } = require("../../service/index")

const deleteContact = async (req, res, next) => {
    const { id } = req.user;
    try {
        const data = await contactsService.removeContact(req.params.contactId, id);
        if (!data) {
            res.status(404).json({ "message": "Not found" })
            return
        }
        res.status(200).json({ "message": "contact deleted" })
    } catch (error) {
        next(error)
    }
}

module.exports = deleteContact;