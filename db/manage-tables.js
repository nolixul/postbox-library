export const dropTables = () => {
    return db.query(`DROP TABLE IF EXISTS items;`)
}

export const createTables = () => {
    return db.query(
      `CREATE TABLE items (
        book_id SERIAL PRIMARY KEY,
        owner VARCHAR NOT NULL,
        title VARCHAR NOT NULL,
        author VARCHAR NOT NULL
      );`
    );
  };
