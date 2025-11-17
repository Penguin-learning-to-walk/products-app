import { create } from 'zustand'

const useStore = create((set) => ({
  products: [],
  arrayLikes: [],
  isLoading: false,

  fetchProducts: async () => {
    set({ isLoading: true })
    const jsonUrl = "https://dummyjson.com/products"
    const response = await fetch(jsonUrl)
    const data = await response.json()
    set({ products: data.products, isLoading: false })
  },

  setProducts: (ProductsArray) => {
    set({ products: ProductsArray })
  },

  setLikes: (LikesArray) => {
    set({ arrayLikes: LikesArray })
  }
}))

export { useStore }