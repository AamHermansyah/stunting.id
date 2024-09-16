import React from 'react'
import SidebarMain from '../_components/sidebar-main';
import Header from '../_components/header';

interface IProps {
  children: React.ReactNode;
}

async function Sidebar({ children }: IProps) {
  return (
    <div className="w-full flex">
      <SidebarMain />
      <div className="w-full min-h-screen bg-slate-100">
        <div className="max-w-[1500px] h-full flex flex-col mx-auto">
          <Header />
          <div className="flex-auto space-y-4 p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar