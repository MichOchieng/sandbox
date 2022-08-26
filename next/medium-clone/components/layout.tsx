import { Navbar } from "./navbar"

export const Layout = ( {children}:any) => {
    return(
        <div className="w-5/6 h-screen flex flex-col mx-auto items-center">
            <Navbar/>
            {children}
        </div>
    )
}