import { db } from '@vercel/postgres'
import format from 'pg-format'
import { bookData, commentData } from '../lib/placeholder-data.js'

// export const seed = async (client) => {

async function seedBooks(client) {
  try {
    // Create the books table if it doesn't exist
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS books (
      book_id SERIAL NOT NULL PRIMARY KEY,
      book_owner VARCHAR (100),
      book_author VARCHAR (100),
      book_title VARCHAR (200),
      review VARCHAR (1000),
      cover_image VARCHAR (1000),
      requested BOOLEAN
    )`
    console.log('Created books table')

    // Insert data into the books table
    const insertedBooks = format(
      `INSERT INTO books (
      book_id,
      book_owner,
      book_author,
      book_title,
      review,
      cover_image
    ) VALUES %L RETURNING *`,
      bookData,
    )

    console.log(`Seeded ${insertedBooks.length} books`)

    return {
      createTable,
      books: insertedBooks,
    }
  } catch (error) {
    console.error('Error seeding books:', error)
    throw error
  }
}

async function seedComments(client) {
  try {
    // Create the comments table if it doesn't exist
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS comments (
      comment_id SERIAL NOT NULL PRIMARY KEY,
      comment_owner VARCHAR (100),
      uploaded_at BIGINT,
      comment VARCHAR (1000),
      book_id INT REFERENCES books (book_id),
      requested BOOLEAN
    )`
    console.log('Created comments table')

    const alterBooks = await client.sql`ALTER TABLE books 
     ADD COLUMN requested_by VARCHAR (100)`

    const insertedComments = format(
      `INSERT INTO comments (
      comment_id,
      comment_owner,
      uploaded_at,
      comment
    ) VALUES %L RETURNING *`,
      commentData,
    )

    console.log(`Seeded ${insertedComments.length} books`)

    return {
      createTable,
      comments: insertedComments,
      alterBooks: alterBooks,
    }
  } catch (error) {
    console.error('Error seeding comments:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedBooks(client)
  await seedComments(client)

  await client.end()
}

main().catch(error => {
  console.error(
    'An error occurred while attempting to seed the database:',
    error,
  )
})
