import { Button } from "@/components/ui/button"
import Link from "next/link"
  
interface IProps{
  profile:string
  keamanan:string
}
function TabsButtonPengaturan({profile, keamanan}:IProps) {
    return (
    <div className='flex flex-row gap-3'>
      <div>
      <Link href={profile}>
        <Button variant={"secondary"} className='sm:w-full'>
            Informasi Pribadi
        </Button>
      </Link>
      </div>
      <div>
      <Link href={keamanan}>
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