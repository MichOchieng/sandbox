import { PageLoad } from "./pageload"

export const Layout = ({children}:any) => {
    return(
        <div
            className="w-screen relative aid h-screen flex flex-col mx-auto items-center"
        >
            <PageLoad/>
            {children}
        </div>
    )
}