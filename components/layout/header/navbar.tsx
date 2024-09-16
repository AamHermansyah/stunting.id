'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAVBAR } from '../../../constants'
import { cn } from '@/lib/utils'
import { MenuProfil } from './menu-profile'

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-10 py-3 bg-background flex justify-between items-center gap-4">
      <div className="flex gap-10 items-center">
        <Link href="/">
          <h1 className="text-lg text-primary font-semibold tracking-widest">
            Stunting.id
          </h1>
        </Link>
        <nav className="flex gap-2">
          {NAVBAR.map((item) => (
            <Link href={item.href}>
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  pathname.includes(item.href) ?
                    'text-primary bg-primary/20 hover:text-primary'
                    : 'hover:bg-background hover:text-primary'
                )}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <MenuProfil />
    </div>
  )
}

export default Navbar