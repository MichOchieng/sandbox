import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <main className="">
      <h1 className="font-bold">Home Page</h1>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/about/team'}>About/Team</Link>
        </li>
      </ul>
    </main>
  )
}
