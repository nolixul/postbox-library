// const { dropTables, createTables } = require('../manage-tables.js');
import { db } from '../connection.js'
import format from 'pg-format';

export const seed = async ({ bookData, commentData }) => {
  await db.query(`DROP TABLE IF EXISTS comments CASCADE`)
  await db.query(`DROP TABLE IF EXISTS books CASCADE`)

  await db.query(
    `CREATE TABLE books (
      book_id SERIAL NOT NULL PRIMARY KEY,
      book_owner VARCHAR (100),
      book_author VARCHAR (100),
      book_title VARCHAR (200),
      review VARCHAR (1000),
      cover_image VARCHAR (1000),
      requested BOOLEAN
    )`
  );

  const booksQueryStr = format(
    `INSERT INTO comments (
      book_id,
      book_owner,
      book_author,
      book_title,
      uploaded_at,
      requested_at,
      review,
      cover_image
    ) VALUES %L RETURNING *`,
    bookData
  )

  await db.query(
    `CREATE TABLE comments (
      comment_id SERIAL NOT NULL PRIMARY KEY,
      comment_owner VARCHAR (100),
      uploaded_at BIGINT,
      comment VARCHAR (1000),
      book_id INT REFERENCES books (book_id),
      requested BOOLEAN,
      requested_at BIGINT
    )`
  );

  await db.query(
    `ALTER TABLE books 
     ADD COLUMN comment_id INT REFERENCES comments (comment_id),
     ADD COLUMN requested_by VARCHAR (100)`
  );

  const commentsQueryStr = format(
    `INSERT INTO comments (
      comment_id,
      comment_owner,
      uploaded_at,
      comment
    ) VALUES %L RETURNING *`,
    commentData
  )
};
