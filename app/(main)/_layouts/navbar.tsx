import Link from 'next/link'
import NavHeaderLinks from '../_components/nav-header-links'
import MobileMenuHeader from './mobile-menu-header'

async function Navbar() {
  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 py-3">
        <div className="font-bold">
          <Link href="/" className="text-primary">Stunting.id</Link>
        </div>
        <nav className="hidden text-sm font-semibold lg:flex items-center gap-10">
          <NavHeaderLinks />
        </nav>
        <div className="block lg:hidden">
          <MobileMenuHeader />
        </div>
      </div>
    </header>
  )
}

export default Navbar