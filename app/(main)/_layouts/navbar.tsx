import Link from 'next/link'
import NavHeaderLinks from '../_components/nav-header-links'
import MobileMenuHeader from './mobile-menu-header'
import { cookies } from 'next/headers'

async function Navbar() {
  const authCookie = cookies().get('auth');

  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 py-3">
        <div className="font-bold">
          <Link href="/" className="text-primary">Stunting.id</Link>
        </div>
        <nav className="hidden text-sm font-semibold md:flex items-center gap-10">
          <NavHeaderLinks
            authCookie={authCookie?.value ? JSON.parse(authCookie.value) : undefined}
          />
        </nav>
        <div className="block md:hidden">
          <MobileMenuHeader
            authCookie={authCookie?.value ? JSON.parse(authCookie.value) : undefined}
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar