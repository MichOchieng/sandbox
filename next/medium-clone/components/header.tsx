

export const Header = () => {
    return(
        <div
            className="flex flex-row w-full aid h-2/5 bg-amber-400 items-center"
        >
            <div 
                className="
                flex flex-col w-1/2 items-start justify-center h-full
                "
            >
                <h1>Staying Curious</h1>
                <h2>Discover stories, thinking and expertise from writers on any topic</h2>
                <button className="button">Start reading</button>
            </div>
            <div 
                className="
                flex flex-col w-1/2 h-full items-center justify-center
                "
            >
                <h1>M</h1>
            </div>
        </div>
    )
}