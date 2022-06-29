import { Box } from "@mui/system"
import * as React from "react"
import { Parallax } from "react-scroll-parallax"


export const Test = () => {

    
    return(

        <Parallax
            
        >
            <Box    
                sx={{
                    height: '100%',
                    // textAlign: 'center'
                }}
            >
                <h1>Testing</h1>
            </Box>
        </Parallax>
    )
}