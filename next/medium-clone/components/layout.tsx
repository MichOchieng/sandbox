import { Navbar } from "./navbar"

export const Layout = ( {children}:any) => {
    return(
        <div className="h-screen flex flex-col items-center">
            <Navbar/>
            {children}
        </div>
    )
}