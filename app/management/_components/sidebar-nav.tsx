'use client'

import React from 'react'
import { sidebarNavItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'


interface SidebarNavItem {
  id: string;
  href: string;
  icon?: React.ElementType; 
  text: string;
}

interface SidebarLabel {
  id: string;
  label: string;
}


interface SidebarNavProps {
  userRole: string
}

const SidebarNav: React.FC<SidebarNavProps> = ({ userRole }) => {
  const pathname = usePathname()

  const filteredNavItems = sidebarNavItems.filter(item => {
    if ('label' in item) {
      return true;
    }
  
    if ('href' in item) {
      if (item.href === '/management/akses-data') {
        return userRole === 'KEPALA_KADER';
      }
  
      if (['/management/kepala-kader', '/management/anggota-kader'].includes(item.href)) {
        return userRole === 'KEPALA_KADER';
      }
    }
  

    return true;
  });
  
  // Tambahkan logika untuk menampilkan label "Akses Data" hanya untuk KEPALA_KADER
  const finalNavItems = filteredNavItems.map(item => {
    if ('label' in item && item.label === 'Akses Data' && userRole !== 'KEPALA_KADER') {
      return null;
    }
    return item;
  }).filter(item => item !== null); 
  
  return (
    <nav className="w-full flex flex-col gap-2">
      {finalNavItems.map((item) =>
        'label' in item ? (
          <h4 className="pl-4 text-xs text-primary" key={item.id}>
            {item.label}
          </h4>
        ) : (
          <Link
            key={item.id}
            className={cn(
              'flex items-center gap-2 px-4 py-3 rounded-md',
              (item.href === '/management' ? pathname === item.href : pathname.includes(item.href))
                ? 'text-primary bg-primary/20'
                : 'text-gray-500 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700'
            )}
            href={item.href}
          >
            {item.icon && <item.icon fontSize={20} />}
            <span className="text-sm font-semibold">{item.text}</span>
          </Link>
        )
      )}
    </nav>
  )
}

export default SidebarNav
