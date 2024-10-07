import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { navigation } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function MobileNavHeaderLinks() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <DropdownMenuItem key={item.id}>
          <Link
            href={item.href}
            className={pathname.includes(item.href) ? 'text-primary' : ''}
          >
            {item.title}
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  )
}

export default MobileNavHeaderLinks