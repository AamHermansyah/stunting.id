'use client'

import { Button } from '@/components/ui/button';
import { navigation } from '@/constants'
import { cn } from '@/lib/utils'
import { AuthCookie } from '@/types';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface IProps {
  authCookie?: AuthCookie;
}

function NavHeaderLinks({ authCookie }: IProps) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            'hover:text-primary py-2',
            pathname.includes(item.href) ? 'text-primary' : 'hover:underline hover:underline-offset-4',
            item.role.length > 0 ? authCookie && item.role.includes(authCookie.role) ? '' : 'hidden' : '',
          )}
        >
          {item.title}
        </Link>
      ))}
      {!authCookie && (
        <Link href='/auth/login'>
          <Button size="sm" className="px-4">
            Login
          </Button>
        </Link>
      )}
    </>
  )
}

export default NavHeaderLinks