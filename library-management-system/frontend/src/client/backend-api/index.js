const { BookApi } = require("./book")
const { UserApi } = require("./user")

const BackendApi = {
  book: BookApi,
  user: UserApi,
}

module.exports = { BackendApi }
