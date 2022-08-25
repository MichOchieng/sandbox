import { Navbar } from "./navbar"

export const Layout = ( {children}:any) => {
    return(
        <div className="w-screen h-screen flex flex-col">
            <Navbar/>
            {children}
        </div>
    )
}