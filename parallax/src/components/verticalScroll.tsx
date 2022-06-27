import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import * as React from "react"
import { render } from "react-dom";

const moon = "../../public/moon.jpg";
const land = "../../public/land.jpg";
const asteroid  = "../../public/asteroid.png";

export const VerticalScroll = () => {
    return(
        <Parallax 
        pages={4} 
        >
        <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
            }}
        >
    
        </ParallaxLayer>
        
        <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
            }}
        >
    
        </ParallaxLayer>
        <ParallaxLayer
            sticky={{ start: 0.9, end: 2.5 }}
            style={{ textAlign: 'center' }}
        >
            <img src={asteroid}></img>
        </ParallaxLayer>

        <ParallaxLayer
            offset={0.2}
            speed={0.05}
        >
            <h2>
            This is the first header
            </h2>
        </ParallaxLayer>

        <ParallaxLayer
            offset={3.2}
            speed={2}
        >
            <h2>
            This is the second header
            </h2>
        </ParallaxLayer>

        </Parallax>
    )
}