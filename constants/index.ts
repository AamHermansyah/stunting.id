import { Layout, MessageSquare, Settings, User } from "lucide-react"
import { HiChartBar, HiUsers } from "react-icons/hi2"
import { BiSolidChart } from 'react-icons/bi'
import { SidebarLabel, SidebarNavItem } from '@/types'
import { TbLayoutDashboardFilled } from "react-icons/tb"
import { FaUsersCog } from "react-icons/fa"
import { IoLogOut } from "react-icons/io5"
import { RiAdminFill } from "react-icons/ri";
import { Hospital, Newspaper, ClipboardPlus, LayoutDashboard } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa";
import { Role } from "@prisma/client"


export const NAVBAR = [
  {
    id: 'navbar-1',
    href: '/dashboard',
    label: 'Dashboard',
    Icon: LayoutDashboard
  },
  {
    id: 'navbar-2',
    href: '/cek-stunting',
    label: 'Cek Stunting',
    Icon: ClipboardPlus
  },
  {
    id: 'navbar-3',
    href: '/artikel',
    label: 'Artikel',
    Icon: Newspaper
  },
  {
    id: 'navbar-4',
    href: '/puskesmas',
    label: 'Puskesmas',
    Icon: Hospital
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
    href: "/management/profile",
    icon: FaUserCircle,
    text: "Profile",
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
    title: 'Dashboard',
    role: ['USER'] as Role[]
  },
  {
    id: 'dashboard-admin',
    href: '/management',
    title: 'Dashboard',
    role: ['KADER', 'KEPALA_KADER'] as Role[]
  },
  {
    id: 'cek-stunting',
    href: '/cek-stunting',
    title: 'Cek Stunting',
    role: [] as Role[]
  },
  {
    id: 'konsultasi',
    href: '/puskesmas',
    title: 'Konsultasi',
    role: [] as Role[]
  },
  {
    id: 'artikel',
    href: '/artikel',
    title: 'Artikel',
    role: [] as Role[]
  },
]

export const kecamatanList = [
  { id: 5, value: 'cihideung', label: 'Cihideung' },
  { id: 3, value: 'cibereum', label: 'Cibereum' },
  { id: 1, value: 'cipedes', label: 'Cipedes' },
  { id: 6, value: 'bungursari', label: 'Bungursari' },
  { id: 4, value: 'purbaratu', label: 'Purbaratu' },
  { id: 8, value: 'indihiang', label: 'Indihiang' },
  { id: 9, value: 'kawalu', label: 'Kawalu' },
  { id: 2, value: 'mangkubumi', label: 'Mangkubumi' },
  { id: 7, value: 'tamansari', label: 'Tamansari' },
  { id: 10, value: 'tawang', label: 'Tawang' },
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

export const foodOptions = [
  { value: "Ayam Goreng", label: "Ayam Goreng" },
  { value: "Ayam Krispi", label: "Ayam Krispi" },
  { value: "Ayam Kalasan", label: "Ayam Kalasan" },
  { value: "Ayam Bumbu Kuning", label: "Ayam Bumbu Kuning" },
  { value: "Yogurt", label: "Yogurt" },
  { value: "Telur Rebus", label: "Telur Rebus" },
  { value: "Ubi Kukus", label: "Ubi Kukus" },
  { value: "menu-lainnya", label: "Menu Lainnya" }, // Option for custom input
];

export const mealTimes = [
  { label: "Makan Pagi", time: "08:00" },
  { label: "Makan Siang", time: "12:00" },
  { label: "Snack Sore", time: "16:00" },
  { label: "Makan Malam", time: "18:00" },
];

export const nutritionOptions = [
  { value: "Protein", label: "Protein" },
  { value: "Lemak", label: "Lemak" },
  { value: "Karbohidrat", label: "Karbohidrat" },
  { value: "Serat", label: "Serat" },
  { value: "Air", label: "Air" },
  { value: "Mineral", label: "Mineral" },
  { value: "Vitamin", label: "Vitamin" },
];

export const breastfeedingTimes = [
  { value: '1', label: '1x' },
  { value: '2', label: '2x' },
  { value: '3', label: '3x' },
  { value: '4', label: '4x' },
  { value: '8', label: '8x' }
];