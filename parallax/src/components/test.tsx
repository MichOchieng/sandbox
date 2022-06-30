import { Box } from "@mui/system"
import * as React from "react"
// import { Parallax, useParallax } from "react-scroll-parallax"
import { Parallax, ParallaxLayer,IParallax } from "@react-spring/parallax";

interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
  }

  const Page = ({ offset, gradient, onClick }: PageProps) => (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div />
      </ParallaxLayer>
  
      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div  />
      </ParallaxLayer>
  
      <ParallaxLayer  offset={offset} speed={0.3}>
        <span>0{offset + 1}</span>
      </ParallaxLayer>
    </>
  )


export const Test = () => { 
    const parallax = React.useRef<IParallax>(null)

    const scroll = (to: number) => {
        if (parallax.current) {
        parallax.current.scrollTo(to)
        }
    }
    return(
        <div>
            <Parallax ref={parallax} pages={3} horizontal>
                <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
                <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
                <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
            </Parallax>
        </div>
    )
}