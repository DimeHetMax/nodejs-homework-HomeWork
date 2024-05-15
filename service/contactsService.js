const Contact = require("./schema/contacts")

const listContacts = async (id) => {
    return Contact.find({ owner: id })
}
const getContactById = async (contactId, ownerId) => {
    return Contact.findOne({ _id: contactId, owner: ownerId })
}
const removeContact = async (contactId, ownerId) => {
    return Contact.findOneAndDelete({ _id: contactId, owner: ownerId })
}
const addContact = async (body) => {
    return Contact.create(body)
}
const updateContact = async (contactId, ownerId, body) => {
    return Contact.findOneAndUpdate({ _id: contactId, owner: ownerId }, body, { returnDocument: 'after' })
}
const updateStatusContact = async (contactId, ownerId, body) => {
    return Contact.findOneAndUpdate({ _id: contactId, owner: ownerId }, body, { returnDocument: 'after' })
}
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateStatusContact
}
