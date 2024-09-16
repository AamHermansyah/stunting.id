import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'

function Header() {
  return (
    <div className="sticky top-0 left-0 w-full flex justify-between items-center gap-4 px-4 py-2 bg-background shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="outline" className="h-auto p-2.5 text-primary lg:hidden">
          <IoMenu className="w-4 h-4" />
        </Button>
        <h4 className="text-sm text-primary hidden sm:block">Managemen</h4>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="ghost" className="h-auto p-2.5 rounded-full text-primary">
          <IoIosNotifications className="w-4 h-4" />
        </Button>
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-xs">PS</AvatarFallback>
        </Avatar>
        <h4 className="text-sm">Puskesmas Sukamenak</h4>
      </div>
    </div>
  )
}

export default Header