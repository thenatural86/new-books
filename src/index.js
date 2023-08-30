import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  const title = 'Iron Flame (The Empyrean, 2)'
  const author = 'Rebecca Yarros'
  return (
    <article className='book'>
      <img src='./images/book-1.jpg' />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const inlineHeadingStyles = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
