import Link from "next/link"


export const Navbar = () => {
    return(
        <div
            className="navBar"
        >
            {/* Logo/Icon */}
            <Link href="/">
                    <img 
                        className="object-contain w-3/6 md:w-1/4 smoothed cursor-pointer"
                        src="https://links.papareact.com/yvf"
                    />
            </Link>
            {/* Nav links */}
            <div
                className="navBar-container"
            >
                <Link 
                    href="/about"
                >
                    <h1 className="navBar-button hidden md:flex">About</h1>
                </Link>
                <Link href="/contact">
                    <h1 className="navBar-button hidden md:flex">Contact</h1>
                </Link>
            
                <h1 className="
                navBar-button hidden md:flex
                ">Follow</h1>
                <h1 className="navBar-button text-center hidden md:flex">Sign In</h1>
                <h1 className="
                navBar-button border-slate-400 border bg-black items-center
                rounded-3xl p-2 hover:scale-105 smoothed text-center 
                w-1/2 h-1/3 md:w-1/4 flex justify-center
                ">Get Started</h1>
            </div>

        </div>
    )
}