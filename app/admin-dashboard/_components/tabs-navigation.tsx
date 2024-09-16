import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function TabsNavigations() {
  return (
    <Tabs defaultValue="dashboard-nav-1" className="w-max">
      <TabsList className="flex">
        <TabsTrigger value="dashboard-nav-1" className="text-xs sm:text-sm">
          Buku Anak
        </TabsTrigger>
        <TabsTrigger value="dashboard-nav-2" className="text-xs sm:text-sm">
          Diary Anak
        </TabsTrigger>
        <TabsTrigger value="dashboard-nav-3" className="text-xs sm:text-sm">
          Riwayat Pertumbuhan
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default TabsNavigations