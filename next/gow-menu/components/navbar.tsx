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

    function getSize(index:number) {
        switch (index) {
            case 0:
                return ["100%","100%"]
            case 1:
                return ["90%","95%"]
            case 2:
                return ["80%","90%"]
            case 3:
                return ["70%","85%"]
            case 4:
                return ["60%","80%"]     
            case 5:
                return ["50%","75%"]                 
            default:
                break;
        }
    }

    const MenuItem = ( { id, title }:navProps ) => {
        return(
            <motion.span
                animate={{
                    height: (toggle) ? getSize(id)![0] : "0%",
                    width:  (toggle) ? getSize(id)![1] : "0%",
                    opacity: (toggle) ? 1 : 0,
                }}
                transition={{
                    duration: 0.5, ease:"easeInOut"
                }}
                className={"bg-slate-800 border-slate-400 border-2 absolute mx-auto left-0 right-0 " + `bottom-[${(id)}rem]`}
            >
                <h1 className="text-3xl w-full font-thin tracking-widest text-center text-white">{title}</h1>
            </motion.span>
        )
    }

    return (
        <div className="w-full flex flex-row items-center justify-center">
            {/* Menu */}
            <div
                className="h-5/6 w-5/6 absolute m-auto top-0 left-0 right-0 bottom-0 aid"
            >
                {
                    data.map((data) => {
                        return <MenuItem key={data.id} id={data.id} title={data.title}/>
                    })
                }
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