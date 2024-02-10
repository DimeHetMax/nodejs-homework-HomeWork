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
    return User.findByIdAndUpdate(id, item)
}
module.exports = {
    addUser,
    findOneUser,
    findUserByIdandUpdate,
    findUserById
}