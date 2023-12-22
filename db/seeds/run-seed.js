import { seed } from "./seed.js";
import bookData from '../data/MOCK_BOOK_DATA.json' assert { type: 'json' }
import commentData from '../data/MOCK_COMMENT_DATA.json' assert { type: 'json' }
import { db } from "../connection.js";

const runSeed = () => {
    return seed(bookData, commentData).then(() => db.end())
};

runSeed();
