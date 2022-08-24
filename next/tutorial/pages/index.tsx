import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="">
      <h1>Home</h1>
      <Link href="/profile">Profile</Link>
    </div>
  )
}

export default Home
