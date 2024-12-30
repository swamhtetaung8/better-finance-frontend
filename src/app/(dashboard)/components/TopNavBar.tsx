import ThemeSwitch from '@/components/betterFinance/ThemeSwitch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from 'lucide-react'
import React from 'react'

const TopNavBar = () => {
  return (
    <nav className='grid grid-cols-4 items-center gap-x-4 mb-8'>
      <h1 className='capitalize scroll-m-20 text-2xl xl:text-3xl font-extrabold tracking-tight text-betterFinance-tertiary dark:text-betterFinance-background'>Dashboard</h1>
      <div></div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search" />
        <Button type="submit">Search</Button>
      </div>
      <div className="flex items-center justify-between">
        <div className='flex gap-4 items-center'>
          <ThemeSwitch/>
          <button className='p-2 transition-colors text-betterFinance-tertiary duration-200 bg-betterFinance-background hover:bg-betterFinance-tertiary/50 rounded-full'>
            <Bell />
          </button>
        </div>
        <div className='flex gap-4 items-center'>
          <h1 className='capitalize scroll-m-20 text-xl xl:text-2xl font-extrabold tracking-tight text-betterFinance-tertiary dark:text-betterFinance-background'>
            Swam Htet
          </h1>
          <button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Photo of user</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default TopNavBar
