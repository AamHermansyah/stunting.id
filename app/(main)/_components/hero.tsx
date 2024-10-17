import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section id="hero" className="min-h-[450px] flex items-center">
      <div className="w-full md:grid grid-cols-2 items-center gap-4 mt-4 sm:mt-0 sm:p-10 md:p-0">
        <div className="space-y-4 flex flex-col justify-center max-w-[490px]">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl" style={{ lineHeight: '120%' }}>
            Hayu baraya urang nyegah stunting!
          </h2>
          <p className="sm:text-lg">
            Stunting merujuk pada kondisi gagal pertumbuhan pada anak akibat kekurangan nutrisi kronis. Oleh karena itu, upaya dalam melakukan pemantauan dan penanganan stunting.
          </p>
          <Link href="/cek-stunting">
            <Button className="w-max">Cek Stunting</Button>
          </Link>
        </div>
        <div className="relative w-full aspect-video bg-gray-300 rounded-lg mt-10 md:mt-0 overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero