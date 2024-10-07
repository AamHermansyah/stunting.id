import TabsNavigations from "@/app/dashboard/_components/tabs-navigation"
import Case1 from "./_components/case-1"
import Case2 from "./_components/case-2"
import Case3 from "./_components/case-3"
import TabsButton from "@/app/dashboard/_components/tabs-button"

const page = () => {
  return (
    <>
        <TabsButton buku='/management/identitas-balita/detail-anak' diary='/management/identitas-balita/detail-anak/diary-anak' riwayat='/management/identitas-balita/detail-anak/riwayat-pertumbuhan' />
        <Case2/>
    </>
  )
}

export default page
