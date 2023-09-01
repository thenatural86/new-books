import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const books = [
  {
    img: './images/book-1.jpg',
    title: 'Iron Flame (The Empyrean, 2)',
    author: 'Rebecca Yarros',
    id: 1,
  },

  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL900_SR900,600_.jpg',
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz ',
    id: 2,
  },
]

const handleClick = (e) => {
  console.log(e)
}

const handleChange = (e) => {
  console.log(e)
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e)
}

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <Book {...book} />
            <form onSubmit={handleSubmit}>
              <h2>Book Form</h2>
              <input
                type='text'
                name='example'
                onChange={handleChange}
                style={{ margin: '1rem 0' }}
              />
              <button type='submit'>Submit Me</button>
            </form>
            <button onClick={handleClick}>Yolo Me</button>
          </div>
        )
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
