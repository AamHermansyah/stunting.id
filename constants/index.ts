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

export const navigation = [
  {
    id: 'dashboard-user',
    href: '/dashboard',
    title: 'Dashboard User'
  },
  {
    id: 'dashboard-admin',
    href: '/management',
    title: 'Dashboard Admin'
  },
  {
    id: 'cek-stunting',
    href: '/cek-stunting',
    title: 'Cek Stunting'
  },
  {
    id: 'konsultasi',
    href: '/puskesmas',
    title: 'Konsultasi'
  },
  {
    id: 'artikel',
    href: '/artikel',
    title: 'Artikel'
  },
]

export const kecamatanList = [
  { id: 1, value: 'tasikmalaya', label: 'Tasikmalaya' },
  { id: 2, value: 'cibeureum', label: 'Cibeureum' },
  { id: 3, value: 'tamansari', label: 'Tamansari' },
  { id: 4, value: 'cipedes', label: 'Cipedes' },
  { id: 5, value: 'sukaraja', label: 'Sukaraja' },
  { id: 6, value: 'sukarame', label: 'Sukarame' },
  { id: 7, value: 'pamulihan', label: 'Pamulihan' },
  { id: 8, value: 'bantarkalong', label: 'Bantarkalong' },
  { id: 9, value: 'cihideung', label: 'Cihideung' },
  { id: 10, value: 'cilamaya', label: 'Cilamaya' },
  { id: 11, value: 'cineam', label: 'Cineam' },
  { id: 12, value: 'cipeundeuy', label: 'Cipeundeuy' },
  { id: 13, value: 'cipatujah', label: 'Cipatujah' },
  { id: 14, value: 'karangnunggal', label: 'Karangnunggal' },
  { id: 15, value: 'manonjaya', label: 'Manonjaya' },
  { id: 16, value: 'singaparna', label: 'Singaparna' },
  { id: 17, value: 'sodonghilir', label: 'Sodonghilir' },
  { id: 18, value: 'sodonghulu', label: 'Sodonghulu' },
  { id: 19, value: 'tanjungjaya', label: 'Tanjungjaya' },
  { id: 20, value: 'taraju', label: 'Taraju' },
  { id: 21, value: 'ciawi', label: 'Ciawi' },
  { id: 22, value: 'sukahening', label: 'Sukahening' },
  { id: 23, value: 'rajamandala', label: 'Rajamandala' },
  { id: 24, value: 'salawu', label: 'Salawu' },
  { id: 25, value: 'salamendeng', label: 'Salamendeng' },
  { id: 26, value: 'sukaratu', label: 'Sukaratu' },
];

export const artikelKategoriList = [
  { id: 1, value: 'gaya hidup', label: 'Gaya Hidup' },
  { id: 2, value: 'pola makan', label: 'Pola Makan' },
  { id: 3, value: 'nutrisi', label: 'Nutrisi' },
  { id: 4, value: 'pertumbuhan balita', label: 'Pertumbuhan Balita' },
  { id: 5, value: 'ibu hamil', label: 'Ibu Hamil dan Menyusui' },
  { id: 6, value: 'gizi anak', label: 'Gizi Anak' },
  { id: 7, value: 'penyakit terkait stunting', label: 'Penyakit Terkait Stunting' },
];

export const tagsArticle = [
  { label: "Gizi", id: "gizi", value: "gizi" },
  { label: "Penyakit", id: "penyakit", value: "penyakit" },
  { label: "Olahraga", id: "olahraga", value: "olahraga" },
  { label: "Kesehatan Mental", id: "kesehatan mental", value: "kesehatan mental" },
  { label: "Pengobatan", id: "pengobatan", value: "pengobatan" },
  { label: "Kesehatan Keluarga", id: "kesehatan keluarga", value: "kesehatan keluarga" }
];

export const EMAIL_SERVICE = 'stunting@support.app.id'