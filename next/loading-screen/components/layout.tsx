import { useEffect, useState } from "react"
import { PageLoad } from "./pageload"
import { useCookies } from "react-cookie"

export const Layout = ({children}:any) => {
    const [cookies,setCookies] = useCookies()
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        if(!cookies.loading) {
            // Set cookie
            setCookies(
                'loading',
                'true',
                {
                    maxAge: 60 * 10
                }
            )
            setLoading(true)
            // Remove loading animation in 3s
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }
    },[])

    if (loading === true) {
        return(
            <div
                className="w-screen relative aid h-screen flex flex-col mx-auto items-center"
            >
                <PageLoad/>
                {children}
            </div>
        )    
    }
    else {
        return(
            <div
                className="w-screen relative aid h-screen flex flex-col mx-auto items-center"
            >
                {children}
            </div>
        )
    }

    
}