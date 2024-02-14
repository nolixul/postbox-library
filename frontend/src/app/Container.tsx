import React from 'react'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <article className={`max-w-screen-md mx-auto ${className}`}>
            {children}
        </article>
    )
}

export default Container
