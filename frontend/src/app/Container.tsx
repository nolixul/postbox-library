import styles from './container.module.css'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <article className={styles.container}>{children}</article>
}

export default Container
