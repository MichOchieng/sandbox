import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="aid h-full w-full flex flex-col">
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/coins">Coins</Link>
    </div>
  )
}

export default Home
