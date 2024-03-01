import styles from './BookCard.module.css'
import Image from 'next/image';
import exampleImage from './../../../../public/logo.png'
import CardFooter from '../cardFooter/CardFooter';

const bookCard = () => {
    return (
        <div className={styles.card}>
            <section>
                <h2>Title</h2>
                <Image
                src={exampleImage}
                alt=''
                width={100}
                 />
                <h2>Author</h2>
            </section>
            <CardFooter />
        </div>
    );
};

export default bookCard;