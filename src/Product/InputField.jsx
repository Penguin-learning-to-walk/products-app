import '/src/Product/Css/Product.css'

function InputField(props) {
  const {
    name,
    value,
    inChange,
    inBlur,
    fieldsDec
  } = props

  if (name == "description")
    return (
      <p className='input-line'><strong>{name}:</strong>
        <textarea
          className='full-width'
          name={name}
          value={value}
          onChange={(event) => inChange(event)}
          onBlur={(event) => inBlur(event)}
          placeholder='Text'
        />
      </p>
    )

  return (
    <p className='input-line'><strong>{name}:</strong>
      <input
        className='full-width'
        type='text'
        name={name}
        value={value}
        onChange={(event) => inChange(event)}
        onBlur={(event) => inBlur(event)}
        placeholder={fieldsDec.includes(name) ? '123.45' : 'Text'}
      />
    </p>
  )
}

export { InputField }