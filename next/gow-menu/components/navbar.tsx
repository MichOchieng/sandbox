import { motion } from "framer-motion"
import { useState } from "react"

interface navProps {
    id: number,
    title: string
}


const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const data = [
        {
            id: 0,
            title: 'Test 1'
        },
        {
            id: 1,
            title: 'Test 2'
        },
        {
            id: 2,
            title: 'Test 3'
        },
        {
            id: 3,
            title: 'Test 4'
        },
        {
            id: 4,
            title: 'Test 5'
        },
    ]

    const MenuItem = ( { id, title }:navProps ) => {
        return(
            <motion.span
                initial={{

                }}
                animate={{

                }}
                className="bg-slate-800 border-slate-400 border-2 absolute top-1/2 left-1/2"
            >
                <h1>{title}</h1>
            </motion.span>
        )
    }

    return (
        <div className="w-full flex flex-row items-center justify-center">
            {/* Menu */}
            <div
                className="h-fit w-fit"
            >
                {data.map((data) => {
                    return <MenuItem key={data.id} id={data.id} title={data.title}/>
                })}
            </div>
            {/* Button */}

            <button 
                className=""
                onClick={() => setToggle(!toggle)}
            >Menu</button>
        </div>
    )
}

export default Navbar