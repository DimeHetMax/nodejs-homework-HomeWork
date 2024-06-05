const register = require("./register");
const login = require("./login");
const logout = require("./logout")
const current = require("./current")
const avatar = require("./avatar")
const verify = require("./verify")
const resendEmail = require("./resendEmail")

module.exports = {
    register,
    login,
    logout,
    current,
    avatar,
    verify,
    resendEmail
}