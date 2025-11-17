import { useState, useMemo } from 'react'
import { useStore } from '/src/Product/Store/UseStore'
import { CardsProducts } from '/src/Product/CardsProducts'
import { FilterCard } from '/src/Product/FilterCard'
import { Pagination } from '/src/Product/Pagination'
import '/src/App.css'

function Products() {
  const products = useStore((state) => state.products)
  const arrayLikes = useStore((state) => state.arrayLikes)
  const [showFavorites, setShowFavorites] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  const [searchQuery, setSearchQuery] = useState("")

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const currentData = useMemo(() => {

    if (showFavorites)
      return products.filter(item => arrayLikes.includes(item.id))

    if (searchQuery)
      return products.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return products
  }, [products, showFavorites, arrayLikes, searchQuery])

  const newIndexData = currentData.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <FilterCard
        filter={showFavorites}
        setFilter={setShowFavorites}
        setIndex={setCurrentPage}
        querySearch={searchQuery}
        setQuerySearch={setSearchQuery}
      />
      <h1>Getting Started with React "App Products"</h1>
      {currentData.length > 0 || newIndexData.length > 0 ? (
        <div className='main-container'>
          {newIndexData.map((item) => (
            <CardsProducts
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              img={item.meta.qrCode}
            />
          ))}
        </div>
      ) : (
        <p>Product card not found......</p>
      )}
      <div className='App'>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={currentData.length}
          totalPostsPage={newIndexData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export { Products }