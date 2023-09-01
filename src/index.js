import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  img: './images/book-1.jpg',
  title: 'Iron Flame (The Empyrean, 2)',
  author: 'Rebecca Yarros',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL900_SR900,600_.jpg',
  title:
    'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
  author: 'Don Miguel Ruiz ',
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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
