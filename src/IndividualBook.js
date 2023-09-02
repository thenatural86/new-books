const IndividualBook = ({ img, title, author, getBook, id }) => {
  return (
    <article className='book'>
      <img src={img} alt={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Click Me!</button>
    </article>
  )
}

export default IndividualBook
