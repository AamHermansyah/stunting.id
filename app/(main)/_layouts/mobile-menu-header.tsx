'use client'

import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MobileNavHeaderLinks from '../_components/mobile-nav-header-links'

function MobileMenuHeader() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        {open ? <IoMdClose fontSize={24} /> : <HiMenu fontSize={24} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="block lg:hidden w-[200px] -translate-x-2">
        <DropdownMenuLabel>Navigasi</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <MobileNavHeaderLinks />
        <DropdownMenuItem>
          <Link href='/auth/login'>
            <Button size="sm" className="w-full">
              Login
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileMenuHeader