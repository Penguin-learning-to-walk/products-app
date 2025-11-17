import '/src/App.css'

function Pagination(props) {
  const {
    postsPerPage,
    totalPosts,
    totalPostsPage,
    currentPage,
    setCurrentPage
  } = props

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length))
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))

  return (
    <nav>
      <ul className='pagination'>
        <li>
          <button onClick={prevPage} disabled={
            currentPage === 1 ||
            totalPosts === 0}>
            Предыдущая
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={nextPage} disabled={
            currentPage === pageNumbers.length ||
            totalPosts === 0 ||
            totalPostsPage === 0}>
            Следующая
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { Pagination }