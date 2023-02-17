import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '@michochieng/momo-toolbox'

const Home: NextPage = () => {
  return (
    <div className="aid h-full w-full flex flex-col">
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/coins">Coins</Link>
      <Button text='momo' outlined={false} classname=''/>
      <button className='button-outlined mx-auto my-2'>button</button>
    </div>
  )
}

export default Home
