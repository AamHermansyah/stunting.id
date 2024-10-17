import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { navigation } from '@/constants'
import { cn } from '@/lib/utils'
import { AuthCookie } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface IProps {
  authCookie?: AuthCookie;
}

function MobileNavHeaderLinks({ authCookie }: IProps) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <DropdownMenuItem
          key={item.id}
          className={cn(
            (authCookie && item.role.length > 0) ? item.role.includes(authCookie.role) ? '' : 'hidden' : ''
          )}
        >
          <Link
            href={item.href}
            className={cn(pathname.includes(item.href) && 'text-primary')}
          >
            {item.title}
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  )
}

export default MobileNavHeaderLinks