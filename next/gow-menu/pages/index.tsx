import type { NextPage } from 'next'
import Header from '../components/header'
import Main from '../components/main'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div
      className='h-screen w-screen flex flex-col items-center justify-between bg-slate-600'
    >
        {/* Header */}
        <Header/>
        {/* Main Scene */}
        <Main/>
        {/* Menu */}
        <Navbar/>
    </div>
  )
}

export default Home
