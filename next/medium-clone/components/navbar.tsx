

export const Navbar = () => {
    return(
        <div
            className="navBar"
        >
            {/* Left Nav links */}
            <div
                className="navBar-container"
            >
                {/* Logo/Icon */}
                <h1 className="text-white font-bold text-xl tracking-widest mx-2">Medium</h1>
                <h1 className="navBar-button">About</h1>
                <h1 className="navBar-button">Contact</h1>
                <h1 className="
                navBar-button border border-black smoothed
                rounded-3xl p-2 bg-black hover:scale-105
                ">Follow</h1>
            </div>
            {/* Right nav links */}
            <div
                className="navBar-container"
            >
                <h1 className="navBar-button">Sign In</h1>
                <h1 className="
                navBar-button border-black border
                rounded-3xl p-2 hover:scale-105 smoothed
                ">Get Started</h1>
            </div>

        </div>
    )
}