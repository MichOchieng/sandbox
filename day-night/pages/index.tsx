import type { NextPage } from 'next'
import { createContext, useState } from 'react'

type ThemeName = 'light' | 'dark' | string
type ThemeContextType = {
  theme: ThemeName,
  setTheme: (name: ThemeName) => void
}

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const preferences = window.localStorage.getItem('theme');
    return preferences
  }
  return 'light'
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

const Home: NextPage = () => {

  return (
    <div
      className='w-screen h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900'
    >
      <div className='w-3/5 h-96 border border-black dark:border-slate-500 flex items-center justify-center bg-white dark:bg-slate-700'>
        <button>Toggle</button>
      </div>
    </div>
  )
}

export default Home
