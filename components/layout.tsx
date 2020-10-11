import Nav from "./nav"

export default function Layout({ children }) {
    return (
        <div>
            <Nav></Nav>
            <main>{children}</main>
        </div>
    )
}