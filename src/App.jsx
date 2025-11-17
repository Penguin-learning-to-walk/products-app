import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Products } from './Product/Pages/Products'
import { ProductId } from './Product/Pages/ProductId'
import { ProductCreate } from './Product/Pages/ProductCreate'
import { useStore } from './Product/Store/UseStore'
import { useEffect } from 'react'

function App() {
  const isLoading = useStore((state) => state.isLoading)
  const fetchProducts = useStore((state) => state.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <>
      {isLoading ? (
        <div className='containerLoder'>
          Loading data......
        </div>
      ) : (
        <Router>
          <Routes>
            <Route index element={<Products />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductId />} />
            <Route path='/products/create-product' element={<ProductCreate />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App