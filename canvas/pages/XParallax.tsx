import React from 'react'
import { MotionStyle, MotionValue, motion, useScroll, useTransform } from 'framer-motion'

const Card = () => {
    return (
        <div className="">
            <div className="w-[200px] h-[200px] bg-red-500 rounded"></div>
        </div>
    )
}

const XParallax = () => {


    return (
        <main className="w-full h-screen aid flex items-center justify-center">
            {/* Main window */}
            <div className="w-[800px] h-[800px] snap-x snap-mandatory flex flex-row items-start overflow-x-scroll border-purple-500 border relative rounded">
                <div className="w-[800px] h-full flex items-center justify-center min-w-full snap-center">
                    <Card/>
                </div>
                <div className="w-[800px] h-full flex items-center justify-center min-w-full snap-center">
                    <Card/>
                </div>
                <div className="w-[800px] h-full flex items-center justify-center min-w-full snap-center">
                    <Card/>
                </div>
                <div className="w-[800px] h-full flex items-center justify-center min-w-full snap-center">
                    <Card/>
                </div>
            </div>
        </main>
    )
}

export default XParallax