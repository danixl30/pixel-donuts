import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export type LayoutProps = {
    children: ReactNode | ReactNode[]
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className="content">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
