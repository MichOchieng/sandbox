import { motion } from "framer-motion"

export const LoadingPage = () => {

    const bigMPath  = "m194.359 283.743 2.64 439.128 102.53 1.036V414.674h1.154l98.72 263.316h78.321l94.596-266.402h1.154l-1.588 314.803 103.842.88-.88-444.408-144.052.341-91.123 303.061h-1.153l-96.313-303.061-147.848.539Z"
    const lilMPath  = "M604.632 547.478v178.091h36.665V600.606h.499l43.65 124.963h30.181l43.649-126.21h.499v126.21h36.666V547.478h-55.124l-39.409 122.469h-.499l-41.654-122.469h-55.123Z"
    

    const bigM = {
        hidden: {
            pathLength: 0,
            fill: "rgba(0, 0, 0, 0)",
            stroke: "rgba(0, 0, 0, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(0, 0, 0, 1)",
            stroke: "rgba(0, 0, 0, 1)"
        }
    }

    const lilM = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 240, 50, 0)",
            stroke: "rgba(240, 189, 17, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(240, 189, 17, 1)",
            stroke: "rgba(240, 189, 17, 1)"
        }
    }

    return(
        <motion.svg 
            className="border border-black w-full h-full bg-slate-700"
            viewBox="0 0 1024 1024">
                <g>
                    <motion.path
                        d={bigMPath}
                        variants={bigM}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 1, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                          }}
                    />
                    <motion.path 
                        d={lilMPath}
                        variants={lilM}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 1, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                            delay: 1
                          }}
                    />
                </g>
        </motion.svg>
    )
}