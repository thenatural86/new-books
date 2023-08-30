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
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const inlineHeadingStyles = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
}

const Image = () => <img src='./images/book-1.jpg' />
const Title = () => <h2>Iron Flame (The Empyrean, 2)</h2>
const Author = () => <h4 style={inlineHeadingStyles}>Rebecca Yarros</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
