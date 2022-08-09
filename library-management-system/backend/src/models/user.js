const { model, Schema } = require("mongoose")

const UserModel = model(
  "users",
  new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  })
)

module.exports = { UserModel }
