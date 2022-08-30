import type { NextPage } from 'next'
import { Dummy } from '../components/dummy'
import MyMarquee from '../components/marquee'


const Home: NextPage = () => {

  const data = [
    {
      id:0,
      image:"f1.avif"
    },
    {
      id:1,
      image:"f1.avif"
    },
    {
      id:2,
      image:"f1.avif"
    },
    {
      id:3,
      image:"f1.avif"
    },
    {
      id:4,
      image:"f1.avif"
    },
    {
      id:5,
      image:"f1.avif"
    },
    {
      id:6,
      image:"f1.avif"
    },
    {
      id:7,
      image:"f1.avif"
    },
  ]

  return (
    <div
      className='
      home h-screen w-screen flex flex-col 
      overflow-scroll items-center
      '
    >
      <h1 className='text-8xl font-bold'>home</h1>

      <MyMarquee slides={data}/>
      <Dummy />

    </div>
  )
}

export default Home
