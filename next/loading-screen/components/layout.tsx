import { useEffect, useState } from "react"
import { PageLoad } from "./pageload"

export const Layout = ({children}:any) => {

    const [loading,setLoading] = useState("true")

    useEffect(() => {
        setTimeout(() => {
            setLoading("false")
        }, 3000)
    },[])

    return(
        <div
            className="w-screen relative aid h-screen flex flex-col mx-auto items-center"
        >
            {
                loading && <PageLoad/>
            }
            {children}
        </div>
    )
}