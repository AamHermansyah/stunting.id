import { MessageSquare, Settings, User } from "lucide-react"
import { HiChartBar, HiUsers } from "react-icons/hi2"
import { BiSolidChart } from 'react-icons/bi'
import { SidebarLabel, SidebarNavItem } from '@/types'
import { TbLayoutDashboardFilled } from "react-icons/tb"
import { FaUsersCog } from "react-icons/fa"
import { PiGearFill } from "react-icons/pi"
import { IoLogOut } from "react-icons/io5"
import { RiAdminFill } from "react-icons/ri";

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

export const sidebarNavItems: (SidebarNavItem | SidebarLabel)[] = [
  {
    id: 'sidebar-label-1',
    label: 'Navigasi Utama'
  },
  {
    id: 'sidebar-item-1',
    href: "/management",
    icon: TbLayoutDashboardFilled,
    text: "Dashboard",
  },
  {
    id: 'sidebar-item-2',
    href: "/management/orang-tua",
    icon: HiUsers,
    text: "Orang Tua",
  },
  {
    id: 'sidebar-label-2',
    label: 'Data Balita'
  },
  {
    id: 'sidebar-item-3',
    href: "/management/identitas-balita",
    icon: BiSolidChart,
    text: "Identitas Balita",
  },
  {
    id: 'sidebar-item-4',
    href: "/management/pengukuran-balita",
    icon: HiChartBar,
    text: "Pengukuran Balita",
  },
  {
    id: 'sidebar-label-3',
    label: 'Akses Data'
  },
  {
    id: 'sidebar-item-5',
    href: "/management/anggota-kader",
    icon: FaUsersCog,
    text: "Anggota Kader",
  },
  {
    id: 'sidebar-item-6',
    href: "/management/kepala-kader",
    icon: RiAdminFill,
    text: "Kepala kader",
  },
];

export const sidebarFixedNav: (SidebarNavItem | SidebarLabel)[] = [
  {
    id: 'sfn-label-1',
    label: 'Sistem'
  },
  {
    id: 'sfn-item-1',
    href: "/management/pengaturan",
    icon: PiGearFill,
    text: "Pengaturan",
  },
  {
    id: 'sfn-item-2',
    href: "/logout",
    icon: IoLogOut,
    text: "Keluar",
  },
];