const { connect } = require("mongoose")

const connectDb = async () => {
  return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
}

module.exports = { connectDb }
