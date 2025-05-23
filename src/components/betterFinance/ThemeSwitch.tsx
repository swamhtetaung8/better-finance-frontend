"use client"

import { SunDimIcon, SunMoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme()

  useEffect(()=> {
    setMounted(true)
  },[])
  
  if(resolvedTheme === 'dark') {
    return (
      <button onClick={()=>setTheme('light')} className='p-3 transition-colors text-betterFinance-tertiary duration-200 bg-betterFinance-tertiary/20 hover:bg-betterFinance-tertiary/40 rounded-full'>
          <SunDimIcon/>
      </button>
    )
  }

  if(resolvedTheme === 'light') {
    return (
      <button onClick={()=>setTheme('dark')} className='p-3 transition-colors text-betterFinance-tertiary duration-200 bg-betterFinance-background/50 hover:bg-betterFinance-tertiary/50 rounded-full'>
          <SunMoonIcon/>
      </button>
    )
  }
}

export default ThemeSwitch