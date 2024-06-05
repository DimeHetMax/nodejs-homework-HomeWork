const User = require("./schema/user");

const addUser = async (body) => {
    return User.create(body)
}
const findOneUser = async (item) => {
    return User.findOne({ email: item }).exec();
}
const findUserById = async (id) => {
    return User.findById(id)
}
const findUserByIdandUpdate = async (id, item) => {
    return User.findByIdAndUpdate(id, item, { returnDocument: "after" })
}
const findOneByToken = async (token) => {
    return User.findOne({ verificationToken: token })
}
const findOneByTokenAndUpdate = async (token) => {
    return User.findOneAndUpdate({ verificationToken: token }, { verify: true, verificationToken: null })
}
const findOneByEmailandUpdate = async (item, token) => {
    return User.findOneAndUpdate({ email: item }, { verificationToken: token })
}
module.exports = {
    addUser,
    findOneUser,
    findUserByIdandUpdate,
    findUserById,
    findOneByToken,
    findOneByTokenAndUpdate,
    findOneByEmailandUpdate,
}