const BookApi = {
  getAllBooks: async () => {
    const res = await fetch("/v1/book", { method: "GET" })
    return res.json()
  },
  getBookByIsbn: async (bookIsbn) => {
    const res = await fetch(`/v1/book/${bookIsbn}`, { method: "GET" })
    return res.json()
  },
  addBook: async (data) => {
    const res = await fetch("/v1/book", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  patchBookByIsbn: async (bookIsbn, data) => {
    const res = await fetch(`/v1/book/${bookIsbn}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  deleteBook: async (bookIsbn) => {
    const res = await fetch(`/v1/book/${bookIsbn}`, { method: "DELETE" })
    return res.json()
  },
}

module.exports = { BookApi }
