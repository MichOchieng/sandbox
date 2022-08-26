

export const Header = () => {
    return(
        <div
            className="flex flex-row w-full h-fit overflow-hidden bg-amber-400 items-center border-b border-slate-400"
        >
            <div className="container">
                <div 
                    className="
                    flex flex-col w-full sm:w-1/2 items-start justify-center h-96 px-5 sm:px-0 smoothed
                    "
                >
                    <h1 className="text-white text-6xl font-serif my-2 md:my-3">Stay Curious.</h1>
                    <h2 className="text-white text-2xl font-thin my-2 md:my-3">Discover stories, thinking and expertise from writers on any topic</h2>
                    <button className="button my-1 md:my-3">Start reading</button>
                </div>
                <div 
                    className="
                    sm:flex sm:flex-col sm:w-1/2 h-full items-center justify-center hidden smoothed
                    "
                >
                    <img 
                        className=""
                        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}