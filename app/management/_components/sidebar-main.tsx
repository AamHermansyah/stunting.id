/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import SidebarNav from './sidebar-nav';
import { sidebarFixedNav } from '@/constants';
import { isSidebarLabel } from '@/types/predict-types';
import { usePathname } from 'next/navigation';
import { useSidebarStore } from '../_stores/use-sidebar-store';
import { logout } from "@/actions/logout"; // Impor fungsi logout

interface SidebarMainProps {
  userRole: string;
}

function SidebarMain({ userRole }: SidebarMainProps) {
  const { isOpen, closeSidebar } = useSidebarStore();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLDivElement;

        if (target && target.closest('#sidebar') === null) {
          closeSidebar();
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleLogout = async () => {
    await logout(); 
  };

  return (
    <>
      <div className="relative hidden lg:block">
        <div className="w-64 h-screen"></div>
      </div>
      <aside
        id="sidebar"
        className={cn(
          'fixed w-64 left-0 h-screen space-y-6 bg-background border-r z-[51] shadow-xl lg:shadow-none transition-all duration-500 ease-in-out',
          isOpen ? '' : '-translate-x-[120%] lg:translate-x-0'
        )}
      >
        <div className="w-full h-full p-4 flex flex-col justify-between gap-4 overflow-y-auto">
          <div>
            <div className="text-center">
              <Link href="/">
                <h1 className="text-xl text-primary text-center font-semibold inline-block">
                  Stunting.id
                </h1>
              </Link>
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
              <SidebarNav userRole={userRole} /> {/* Properti userRole diteruskan */}
            </div>
          </div>
          <div className="w-full space-y-2">
            {sidebarFixedNav.map((item) =>
              isSidebarLabel(item) ? (
                <h4 className="pl-4 text-xs text-primary" key={item.id}>
                  {item.label}
                </h4>
              ) : (
                <Link
                  key={item.id}
                  className={cn(
                    'flex items-center gap-2 px-4 py-3 rounded-md',
                    pathname === item.href
                      ? 'text-primary bg-primary/20'
                      : 'text-gray-500 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700'
                  )}
                  href={item.href}
                  onClick={item.href === '/login' ? handleLogout : undefined}
                >
                  {item.icon && <item.icon fontSize={20} />}
                  <span className="text-sm font-semibold">{item.text}</span>
                </Link>
              )
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default SidebarMain;
