import { useEffect, useState } from "react"
import { PageLoad } from "./pageload"

function useLoadingState (initialVal:string, key:string){
    const [value,setValue] = useState(initialVal)

    useEffect(() => {
        const loadingValue = window.localStorage.getItem(key)

        if(loadingValue !== null) {
            setValue(JSON.parse(loadingValue))
        }
    },[key])

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value,setValue]
}

export const Layout = ({children}:any) => {

    const [loading,setLoading] = useLoadingState("true","loading")

    useEffect(() => {
        setTimeout(() => {
            if (typeof setLoading == "function") {
                setLoading("false")
            }
        }, 3000)
    },[])

    return(
        <div
            className="w-screen relative aid h-screen flex flex-col mx-auto items-center"
        >
            {
                (loading === "true") && <PageLoad/>
            }
            {children}
        </div>
    )
}