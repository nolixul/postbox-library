import React from 'react'
import styles from './container.module.css'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <article className={`${styles.main} ${className}`}>{children}</article>
    )
}

export default Container
