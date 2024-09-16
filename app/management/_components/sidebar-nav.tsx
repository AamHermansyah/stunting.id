'use client'

import React from 'react'
import { sidebarNavItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { isSidebarLabel } from '@/types/predict-types'

function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="w-full flex flex-col gap-2">
      {sidebarNavItems.map((item) => isSidebarLabel(item) ? (
        <h4 className="pl-4 text-xs text-primary" key={item.id}>
          {item.label}
        </h4>
      ) : (
        <Link
          key={item.id}
          className={cn(
            'flex items-center gap-2 px-4 py-3 rounded-md',
            (item.href === '/management' ? pathname === item.href : pathname.includes(item.href)) ?
              'text-primary bg-primary/20' :
              'text-gray-500 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700'
          )}
          href={item.href}
        >
          {item.icon && <item.icon fontSize={20} />}
          <span className="text-sm font-semibold">{item.text}</span>
        </Link>
      ))}
    </nav>
  )
}

export default SidebarNav