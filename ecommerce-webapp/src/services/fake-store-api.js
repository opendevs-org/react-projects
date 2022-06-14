const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.json();
        return result;
    },
    fetchProductById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const result = await res.json()
        return result
    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.json()
        return result.filter((product) => product.title.toLowerCase().includes(query))
    },
}

export { FakeStoreApi }