'use client'
import { useState } from 'react'
import styles from './BookCard.module.css'
import Image from 'next/image'
import exampleImage from './../../../../public/logo.png'
import { bookData } from '../../../../lib/placeholder-data'

const books = bookData

const bookCard = () => {
  const [isBookRequested, setisBookRequested] = useState<boolean>()
  // if book has been request, onClick change 'request book' to 'requested' and disable the button (?)

  const handleRequestBook = () => {
    setisBookRequested(true)
  }

  return (
    <div className={styles.card}>
      <section>
        {books.map(book => (
          <div key={book.book_id}>
            <h4>{book.book_title}</h4>
            <p>{book.book_author}</p>
            <p>{book.book_owner}</p>
            <Image src={exampleImage} alt="" width={100} height={100} />
            <button
              className={styles.button}
              onClick={handleRequestBook}
              disabled={isBookRequested}
            >
              Request Book
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default bookCard
