import { motion } from "framer-motion"

export const LoadingPage = () => {

    const bigM = {
        hidden: {
            pathLength: 0,
            fill: "rgba(0, 0, 0, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(0, 0, 0, 0)"
        }
    }

    const lilM = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 240, 50, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 240, 50, 0)"
        }
    }

    return(
        <svg
        className="w-full h-full"
    >
        {/* <motion.path
            d="M571.432 482.377h258.209v258.759H571.432z"
            variants={bigM}
            initial="hidden"
            animate="visible"
        /> */}
        <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={bigM}
            initial="hidden"
            animate="visible"
        />
    </svg>
    )
}