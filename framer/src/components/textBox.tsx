import { motion } from 'framer-motion';

export const TextBox = () => {
    return (
        <motion.div className="
        flex w-1/2 h-1/4 overflow-hidden
        text-center
        border border-black rounded-lg p-4
        "
        initial={{
            y:100,
            opacity: 0
        }}
        animate={{
            y:0,
            opacity: 1
        }}
        transition={{
            type: 'spring',
            stiffness: 200,
            damping: 30
        }}
        >
            <motion.p
                initial={{
                    y:100,
                    opacity: 0
                }}
                animate={{
                    y:0,
                    opacity: 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 50
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ad ipsum saepe autem sapiente id rerum cupiditate necessitatibus facere. Porro expedita voluptas ducimus consequuntur ullam illum tempore, ab reprehenderit quidem.
            </motion.p>
        </motion.div>
    )
}