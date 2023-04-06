import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <header>
        <div className="w-full h-32 text-xl font-bold flex justify-evenly items-center bg-emerald-500">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/about/team'>Team</Link>
            <Link href='/code'>Code</Link>
        </div>
    </header>
  )
}

export default Header