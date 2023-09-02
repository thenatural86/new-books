import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { books } from './books'
import IndividualBook from './IndividualBook'

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <IndividualBook {...book} getBook={getBook} />
          </div>
        )
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
