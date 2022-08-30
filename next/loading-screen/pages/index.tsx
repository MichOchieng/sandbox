import type { NextPage } from 'next'
import { Dummy } from '../components/dummy'

const Home: NextPage = () => {
  return (
    <div
      className='
      home h-screen w-screen flex flex-col 
      overflow-scroll items-center
      '
    >
      <h1 className='text-8xl font-bold'>home</h1>
      <button
        onClick={
          () => {
            localStorage.setItem('loading','true')
          }
        }
      >loading thing true</button>
      <button
        onClick={
          () => {
            localStorage.setItem('loading','false')
          }
        }
      >loading thing false</button>
      <Dummy/>
    </div>
  )
}

export default Home
