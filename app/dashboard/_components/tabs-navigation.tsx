import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function TabsNavigations() {
  return (
    <Tabs defaultValue="dashboard-nav-1" className="w-max">
      <TabsList className="flex">
        <TabsTrigger value="dashboard-nav-1">Buku Anak</TabsTrigger>
        <TabsTrigger value="dashboard-nav-2">Diary Anak</TabsTrigger>
        <TabsTrigger value="dashboard-nav-3">Riwayat Pertumbuhan</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default TabsNavigations