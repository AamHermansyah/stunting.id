import { MessageSquare, Settings, User } from "lucide-react"

export const NAVBAR = [
  {
    id: 'navbar-1',
    href: '/dashboard',
    label: 'Dashboard'
  },
  {
    id: 'navbar-2',
    href: '/cek-stunting',
    label: 'Cek Stunting'
  },
  {
    id: 'navbar-3',
    href: '/artikel',
    label: 'Artikel'
  },
  {
    id: 'navbar-4',
    href: '/puskesmas',
    label: 'Puskesmas'
  },
]

export const MENU_PROFILE = [
  {
    id: 'menu-profile-1',
    href: '/profile',
    label: 'Profile',
    Icon: User
  },
  {
    id: 'menu-profile-2',
    href: '/settings',
    label: 'Pengaturan',
    Icon: Settings
  },
  {
    id: 'menu-profile-3',
    href: '/faq',
    label: 'FAQ',
    Icon: MessageSquare
  },
]