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

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <Book {...book} />
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
