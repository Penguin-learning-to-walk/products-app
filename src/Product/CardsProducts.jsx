import { useState } from 'react'
import { useStore } from '/src/Product/Store/UseStore'
import { useNavigate } from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import IconButton from '@mui/material/IconButton'
import '/src/Product/Css/Product.css'

function CardsProducts(props) {
  const {
    id,
    title,
    description,
    img
  } = props

  const navigate = useNavigate()
  const products = useStore((state) => state.products)
  const arrayLikes = useStore((state) => state.arrayLikes)
  const setProducts = useStore((state) => state.setProducts)
  const setLikes = useStore((state) => state.setLikes)
  const trueLikes = arrayLikes.includes(id)
  const [liked, setLiked] = useState(trueLikes)

  const goToProductId = () => {
    navigate('/products/:id', { state: id })
  }

  const likeClick = (event) => {
    event.stopPropagation()
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

  const deleteClick = (event) => {
    event.stopPropagation()

    const newProducts = products.filter(item => item.id !== id)
    setProducts(newProducts)

    if (arrayLikes.includes(id)) {
      const newIdLikes = arrayLikes.filter(item => item !== id)
      setLikes(newIdLikes)
    }
  }

  return (
    <div className='product' onClick={goToProductId} role='button'>
      <img className='product-img' src={img} alt='product image' />
      <p className='title-p'>{title}</p>
      <p className='descrip-p'>{description}</p>
      <div className='product-footer'>
        <button onClick={deleteClick}>
          Delete
        </button>
        <IconButton onClick={likeClick} aria-label='like'>
          {liked ? (
            <ThumbUpIcon sx={{ color: '#080808ff' }} />
          ) : (
            <ThumbUpIcon sx={{ color: '#9c9e9eff' }} />
          )}
        </IconButton>
      </div>
    </div>
  )
}

export { CardsProducts }