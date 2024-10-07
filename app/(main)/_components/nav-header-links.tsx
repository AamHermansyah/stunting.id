'use client'

import { Button } from '@/components/ui/button';
import { navigation } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function NavHeaderLinks() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn('hover:text-primary', pathname.includes(item.href) ? 'text-primary' : 'hover:underline hover:underline-offset-4')}
        >
          {item.title}
        </Link>
      ))}
      <Link href='/auth/login'>
        <Button size="sm" className="px-4">
          Login
        </Button>
      </Link>
    </>
  )
}

export default NavHeaderLinks