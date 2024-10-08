import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import Link from "next/link"
  
  const TabsButtonPengaturan = () => {
    return (
    <div className='flex flex-row gap-3'>
      <div>
      <Link href={'/management/pengaturan'}>
        <Button variant={"secondary"} className='sm:w-full'>
            Informasi Pribadi
        </Button>
      </Link>
      </div>
      <div>
      <Link href={'/management/pengaturan/keamanan-akun'}>
        <Button variant={"secondary"}>
            Keamanan Akun
        </Button>
      </Link>
      </div>
      <div>
      </div>
    </div>
    )
  }
  
  export default TabsButtonPengaturan