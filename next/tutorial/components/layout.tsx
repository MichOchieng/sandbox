import { Children } from "react"
import { Navbar } from "./navbar"

const Layout = ({ children }:any) => {
    return(
        <>
            <Navbar/>
        <   main>{children}</main>
        </>
    )
}

export default Layout