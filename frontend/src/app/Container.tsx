import React from 'react'
import styles from './container.module.css'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <article className={`${styles.main}`}>{children}</article>
}

export default Container
