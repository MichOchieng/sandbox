import type { NextPage } from 'next'
import Head from 'next/head';


const checkTheme = () => {
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    }

// if NOT set via local storage previously
} else {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
}
}

const Home: NextPage = () => {

  return (
    <div
      className='smoothed w-screen h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900'
    >
      <div className='smoothed w-3/5 h-96 border border-black dark:border-slate-500 flex items-center justify-center bg-white dark:bg-slate-700'>
        <button
          onClick={() => checkTheme()}
        >Toggle</button>
      </div>
    </div>
  )
}

export default Home
