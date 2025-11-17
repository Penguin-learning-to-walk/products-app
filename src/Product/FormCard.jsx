import { useState } from 'react'
import { useStore } from '/src/Product/Store/UseStore'
import { useNavigate } from 'react-router-dom'
import { LaodImage } from '/src/Product/LaodImage'
import { InputField } from '/src/Product/InputField'
import '/src/Product/Css/Product.css'
import '/src/App.css'

function FormCard(props) {
  const {
    cardEd,
    setShouldNavigate
  } = props

  const navigate = useNavigate()
  const products = useStore((state) => state.products)
  const setProducts = useStore((state) => state.setProducts)
  const [change, setChange] = useState(false)
  const [newCardEd, setNewCardEd] = useState({
    id: cardEd ? cardEd.id : 0,
    title: cardEd ? cardEd.title : "",
    description: cardEd ? cardEd.description : "",
    category: cardEd ? cardEd.category : "",
    price: cardEd ? cardEd.price : "",
    discountPercentage: cardEd ? cardEd.discountPercentage : "",
    rating: cardEd ? cardEd.rating : "",
    stock: cardEd ? cardEd.stock : "",
    brand: cardEd ? cardEd.brand : "",
    sku: cardEd ? cardEd.sku : "",
    weight: cardEd ? cardEd.weight : "",
    warrantyInformation: cardEd ? cardEd.warrantyInformation : "",
    shippingInformation: cardEd ? cardEd.shippingInformation : "",
    availabilityStatus: cardEd ? cardEd.availabilityStatus : "",
    returnPolicy: cardEd ? cardEd.returnPolicy : "",
    minimumOrderQuantity: cardEd ? cardEd.minimumOrderQuantity : "",
    meta: { qrCode: cardEd ? cardEd.meta.qrCode : "" }
  })
  const decFields = [
    "price",
    "rating",
    "stock",
    "weight",
    "discountPercentage",
    "minimumOrderQuantity"
  ]

  const decInput = (dec) => {
    let value = dec
    value = value.replace(/[^0-9.]/g, '')
    const parts = value.split('.')

    if (parts.length > 2)
      value = parts[0] + '.' + parts.slice(1).join('')

    return value
  }

  const inputBlur = (event) => {
    const { name } = event.target
    let value = event.target.value

    if (value.endsWith('.')) {
      value = value.slice(0, -1)

      setNewCardEd(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  const inputChange = (event) => {
    const { name } = event.target
    let value = event.target.value

    if (!change)
      setChange(true)

    if (decFields.includes(name))
      value = decInput(value)

    setNewCardEd(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const goToProduct = () => {
    navigate('/products')
  }

  const validFilled = () => {

    const allFilled = Object.values(newCardEd).every(value => {
      return String(value).trim() !== ""
    })

    if (allFilled && newCardEd.meta.qrCode != "")
      return true
  }

  const saveCard = () => {

    if (validFilled()) {
      const updatedProducts = products.map(product => {

        if (product.id === cardEd.id)
          return newCardEd

        return product
      })

      setProducts(updatedProducts)
      setShouldNavigate(false)
    }
    else {
      alert("All input fields must be filled in")
    }
  }

  const createCard = () => {

    if (validFilled()) {
      const maxId = Math.max(...products.map(product => product.id))
      const newCardEdMaxId = { ...newCardEd, id: maxId + 1 }
      const updatedProducts = [...products, newCardEdMaxId]

      setProducts(updatedProducts)
      navigate('/products/:id', { state: maxId + 1 })
    }
    else {
      alert("All input fields must be filled in")
    }
  }

  return (
    <>
      <h1>{cardEd ? 'Edit card page' : 'Create card page'}</h1>
      <div className='productCard'>
        <div className='main-product-layout'>
          <LaodImage
            img={newCardEd.meta.qrCode}
            setImg={setNewCardEd}
            setShow={setChange}
          />
          <div className='details-grid-inner'>
            {Object.entries(newCardEd).map(([key, value]) => {
              const excFields = ['id', 'meta'];
              return excFields.includes(key) ? (
                null
              ) : (
                < InputField
                  key={key}
                  name={key}
                  value={value}
                  inChange={inputChange}
                  inBlur={inputBlur}
                  fieldsDec={decFields}
                />
              )
            })}
          </div>
        </div>
        <div className='productCard-footer'>
          <button onClick={goToProduct}>
            Home
          </button>
          {cardEd ? (
            <button onClick={saveCard} disabled={change === false}>
              Save edit
            </button>
          ) : (
            <button onClick={createCard} disabled={change === false}>
              Save card
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export { FormCard }