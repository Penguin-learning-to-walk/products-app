import { useState } from 'react'
import '/src/Product/Css/LaodImage.css'

function LaodImage(props) {
  const {
    img,
    setImg,
    setShow
  } = props

  const [imageSrc, setImageSrc] = useState(img)

  const imageUpload = (event) => {
    const file = event.target.files[0]

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()

      reader.onloadend = () => {
        const imageDataUrl = reader.result
        setImageSrc(imageDataUrl)
        setImg(prevData => ({
          ...prevData,
          meta: { qrCode: imageDataUrl }
        }))
      }

      reader.readAsDataURL(file)
    }
    else {
      alert("Please select an image file")
    }
  }

  const fileInput = () => {
    setShow(true)
    document.getElementById("file-upload-input").click()
  }

  return (
    <div className='image-uploader-container'>
      {imageSrc ? (
        <img className='product-preview-img' src={imageSrc} alt='Uploaded product preview' />
      ) : (
        <div className='no-image-placeholder'>
          No image
        </div>
      )}
      <input
        type='file'
        id='file-upload-input'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={imageUpload}
      />
      <button onClick={fileInput}>
        {imageSrc ? 'Change Image' : 'Upload Image'}
      </button>
    </div>
  )
}

export { LaodImage }