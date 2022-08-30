import Marquee from 'react-fast-marquee'

const MyMarquee = ({slides}:any) => {
    return(
        <div
            className="h-fit w-full aid"
        >
            <Marquee
                gradientWidth={0}
                pauseOnHover
                style={{
                    zIndex: 10
                }}
            >
                {slides.map((slide:any) => {
                    return(
                        <img 
                            className="
                            object-contain h-56 mx-10 rounded-xl
                            hover:scale-105 smoothed 
                            " 
                            src={slide.image}/>
                    )
                })}
            </Marquee>
        </div>
    )
}

export default MyMarquee