import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const PHero = () => {
    const targetRef = React.useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? 'relative' : 'fixed'
    })

    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef}
            className='relative flex items-start justify-items-center h-screen border border-blue-400'>
            <motion.div
                style={{ scale, position }}
                className="absolute top-0 left-0 right-0 mx-auto mt-10 z-10 flex flex-col items-center text-white aid"
            >
                <p className="mb-2 text-2xl font-light">
                    <span className="font-medium">Beta</span>
                </p>
                <h1 className="mb-12 text-center font-heading text-5xl leading-[1]">
                    Project
                    <br />
                    Title
                </h1>
            </motion.div>
        </motion.section>
    )
}

export default PHero