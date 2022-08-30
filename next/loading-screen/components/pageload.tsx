import { motion } from "framer-motion"
import { useState } from "react"


export const PageLoad = () => {

    const [button,setButton] = useState(false)

    const slideDown = {
        visible: {
            y:0,
            scaleY: 1
        },
        hidden: {
            y:"100vh",
            scaleY: 0
        }
    }

    return(
        <motion.div
            variants={slideDown}
            animate={(button) ? "hidden" : "visible"}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 60
              }}
            className="absolute top-0 left-0 w-full h-screen flex flex-row items-center justify-center"
        >
            <motion.div
                className="bg-white w-full h-full flex flex-row items-center justify-center"
            >
                <button
                    onClick={() => setButton(!button)}
                >button 1</button>
            </motion.div>
        </motion.div>
    )
}