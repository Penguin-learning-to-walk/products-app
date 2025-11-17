import '/src/Product/Css/Product.css'

function FilterCard(props) {
  const {
    filter,
    setFilter,
    setIndex,
    querySearch,
    setQuerySearch
  } = props

  const filterClick = () => {
    setFilter(!filter)
    setQuerySearch("")
    setIndex(1)
  }

  const searchChange = (event) => {
    setQuerySearch(event.target.value)
    setIndex(1)
  }

  return (
    <>
      <input
        className='input-input'
        style={{ display: filter && 'none' }}
        name='title'
        type='text'
        placeholder='Search...'
        value={querySearch}
        onChange={searchChange}
      />
      <button className='button-button' onClick={filterClick}>
        {filter ? 'Filtration all' : 'Filtration likes'}
      </button>
    </>
  )
}

export { FilterCard }