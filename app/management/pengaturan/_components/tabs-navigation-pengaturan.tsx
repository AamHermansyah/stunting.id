import {
    Tabs,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  
  function TabsNavigationsPengaturan() {
    return (
      <Tabs defaultValue="dashboard-nav-1" className="w-max">
        <TabsList className="flex">
          <TabsTrigger value="dashboard-nav-1" className="text-xs sm:text-sm">
            Informasi Pribadi
          </TabsTrigger>
          <TabsTrigger value="dashboard-nav-2" className="text-xs sm:text-sm">
            Keamanan Akun
          </TabsTrigger>
        </TabsList>
      </Tabs>
    )
  }
  
  export default TabsNavigationsPengaturan