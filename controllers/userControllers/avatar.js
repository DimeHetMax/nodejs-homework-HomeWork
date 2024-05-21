const fs = require("node:fs").promises;
const path = require("node:path");

const { userService } = require("../../service/index");

const avatar = async (req, res, next) => {
    const { id } = req.user;
    const { filename, path: filePath } = req.file;
    // console.log("====>>>", req.headers.host, req.url, filename)
    try {
        await fs.rename(
            filePath,
            path.resolve("public/avatars", filename)
        )
        const user = await userService.findUserByIdandUpdate(id, { avatarURL: `http:${req.headers.host}${req.url}/${filename}` })
        if (!user) {
            return res.status(401).json({ "message": " 401 Unauthorized" })
        }
        res.status(200).json({
            "avatarURL": user.avatarURL
        })
    } catch (error) {
        next(error)
    }
};

module.exports = avatar;