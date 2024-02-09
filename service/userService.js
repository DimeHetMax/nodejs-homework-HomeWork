const User = require("./schema/user");

const addUser = async (body) => {
    return User.create(body)
}

module.exports = {
    addUser,

}