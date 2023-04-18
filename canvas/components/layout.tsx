import Head from "next/head"
import { useRouter } from "next/router"
import Link from "next/link"

interface Props {
    children: JSX.Element
}

export const Layout = ({children}:Props) => {
    const router = useRouter()

    return(
        <>
            <Head>
                <title>head</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A series of web applications and software created by Mich Cchieng"/>
                <meta name="og:title" content="Mich Ochieng's Web Developement Portfolio"/>
                <meta name="og:description" content="A series of web applications and software created by Mich Ochieng"/>
                <meta name="og:url" content="https://michochieng.com"/>
                <meta name="og:type" content="website"/>
            </Head>
            <div className="flex flex-col items-center justify-center h-full w-full min-h-screen">
                {children}
                {/* Main page */}
                {/* <div className="flex flex-col items-center justify-center border border-red-400 w-full max-w-[1220px] h-[750px]">
                    <div className="w-full bg-slate-300 h-10 px-10">
                        {router.route}
                    </div>
                    {children}
                </div> */}
                {/* Bottom nav */}
                {/* <div className="w-full h-16 border fixed bottom-0 bg-slate-300">
                    <Link href='/'>Home</Link>
                    <Link href='/dummy'>Dummy</Link>
                </div> */}
            </div>
        </>
    )
}