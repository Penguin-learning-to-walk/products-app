import { useState } from 'react'
import { useStore } from '/src/Product/Store/UseStore'
import { useNavigate, useLocation } from 'react-router-dom'
import { FormCard } from '/src/Product/FormCard'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import IconButton from '@mui/material/IconButton'
import '/src/Product/Css/Product.css'
import '/src/App.css'

function ProductId() {
  const navigate = useNavigate()
  const location = useLocation()
  const products = useStore((state) => state.products)
  const arrayLikes = useStore((state) => state.arrayLikes)
  const setLikes = useStore((state) => state.setLikes)
  const id = location.state
  const trueLikes = arrayLikes.includes(id)
  const [liked, setLiked] = useState(trueLikes)
  const [edit, setEdit] = useState(false)
  const card = products.find(item => item.id === id)

  const goToProduct = () => {
    navigate('/products')
  }

  const goToProductCreate = () => {
    navigate('/products/create-product')
  }

  const likeClick = () => {
    setLiked(!liked)

    if (arrayLikes.includes(id)) {
      const newIdLikes = arrayLikes.filter(item => item !== id)
      setLikes(newIdLikes)
    }
    else {
      const newIdLikes = [...arrayLikes, id]
      setLikes(newIdLikes)
    }
  }

  const editCard = () => {
    setEdit(true)
  }

  if (edit)
    return (
      <FormCard
        cardEd={card}
        setShouldNavigate={setEdit}
      />
    )

  return (
    <>
      {card && (
        <>
          <h1>Cards view page</h1>
          <div className='productCard'>
            <div className='main-product-layout'>
              <img src={card.meta.qrCode} alt='product image' />
              <div className='details-grid-inner'>
                <p className='title-p'><strong>title:</strong> {card.title}</p>
                <p className='descrip-p'><strong>description:</strong> {card.description}</p>
                <p><strong>category:</strong> {card.category}</p>
                <p><strong>price:</strong> {card.price}</p>
                <p><strong>discount percentage:</strong> {card.discountPercentage}</p>
                <p><strong>rating:</strong> {card.rating}</p>
                <p><strong>stock:</strong> {card.stock}</p>
                <p><strong>brand:</strong> {card.brand}</p>
                <p><strong>sku:</strong> {card.sku}</p>
                <p><strong>weight:</strong> {card.weight}</p>
                <p><strong>warranty information:</strong> {card.warrantyInformation}</p>
                <p><strong>shipping information:</strong> {card.shippingInformation}</p>
                <p><strong>availability status:</strong> {card.availabilityStatus}</p>
                <p><strong>return policy:</strong> {card.returnPolicy}</p>
                <p><strong>minimum order quantity:</strong> {card.minimumOrderQuantity}</p>
              </div>
            </div>
            <div className='productCard-footer'>
              <button onClick={goToProduct}>
                Home
              </button>
              <IconButton onClick={likeClick} aria-label='like'>
                {liked ? (
                  <ThumbUpIcon sx={{ color: '#080808ff' }} />
                ) : (
                  <ThumbUpIcon sx={{ color: '#9c9e9eff' }} />
                )}
              </IconButton>
              <button onClick={editCard}>
                Edit card
              </button>
              <button onClick={goToProductCreate}>
                Create card
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export { ProductId }