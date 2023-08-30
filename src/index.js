import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const img = './images/book-1.jpg'
const title = 'Iron Flame (The Empyrean, 2)'
const author = 'Rebecca Yarros'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.img} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
