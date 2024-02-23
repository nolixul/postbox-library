import './globals.css'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <article className="container">{children}</article>
}

export default Container
