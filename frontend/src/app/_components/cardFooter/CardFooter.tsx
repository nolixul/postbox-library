import styles from './CardFooter.module.css'

const CardFooter = () => {
    return (
        <div>
            <h4>Owner</h4>
            <p>Example Owner Name</p>
            <button className={styles.button}>Request Book</button>
        </div>
    );
};

export default CardFooter;