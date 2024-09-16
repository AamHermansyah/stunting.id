import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

function FormAddAnak() {
  return (
    <form className="space-y-4">
      <Card className="p-4 sm:p-10 space-y-4">
        <h1 className="font-semibold text-lg text-gray-700 mb-4">Profile Anak</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block cursor-pointer w-max rounded-full">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>Profile Anak</AvatarFallback>
              </Avatar>

              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="w-full">
            <Label>
              Nama Depan<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Masukan nama anak anda" className="w-full" />
          </div>

          <div className="w-full">
            <Label>Nama Belakang</Label>
            <Input placeholder="Masukan nama belakang anak" className="w-full" />
          </div>

          <div className="w-full">
            <Label>Tanggal Lahir<span className="text-red-500">*</span></Label>
            <Input type="date" className="w-full" />
          </div>

          <div className="w-full space-y-3">
            <Label>Jenis Kelamin<span className="text-red-500">*</span></Label>
            <RadioGroup defaultValue="laki-laki" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="laki-laki" id="laki-laki" />
                <Label htmlFor="laki-laki">Laki-Laki</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="perempuan" id="perempuan" />
                <Label htmlFor="perempuan">Perempuan</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Card>

      <Card className="p-4 sm:p-10 space-y-4">
        <h1 className="font-semibold text-lg text-gray-700">Data Kelahiran</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full">
            <Label>
              Tinggi Badan Saat Lahir (cm)<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Masukan tinggi anak anda" className="w-full" />
          </div>
          <div className="w-full">
            <Label>Berat Badan Saat Lahir (kg)<span className="text-red-500">*</span></Label>
            <Input placeholder="Masukan berat anak anda" className="w-full" />
          </div>
          <div className="w-full">
            <Label>
              Lingkar Kepala Saat Lahir (cm)<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Masukan lingkar kepala anak" className="w-full" />
          </div>
          <div className="w-full">
            <Label>Lingkar Lengan Saat Lahir (cm)<span className="text-red-500">*</span></Label>
            <Input placeholder="Masukan Lingkar kepala anak" className="w-full" />
          </div>
        </div>
      </Card>


      <Card className="p-4 sm:p-10 space-y-4">
        <h1 className="font-semibold text-lg text-gray-700">
          Data Kesehatan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full">
            <Label>
              Golongan Darah<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Golongan Darah" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Golongan Darah</SelectLabel>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="AB">AB</SelectItem>
                  <SelectItem value="O">O</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>
              Apakah anak anda memiliki alergi
              <span className="text-red-500">*</span>
            </Label>
            <RadioGroup defaultValue="tidak" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ya" id="ya" />
                <Label htmlFor="ya">Ya</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tidak" id="tidak" />
                <Label htmlFor="tidak">Tidak</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>
              Apakah anak anda lahir prematur
              <span className="text-red-500">*</span>
            </Label>
            <RadioGroup defaultValue="tidak" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ya" id="ya" />
                <Label htmlFor="ya">Ya</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tidak" id="tidak" />
                <Label htmlFor="tidak">Tidak</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Card>

      <Card className="p-4 sm:p-10 space-y-4">
        <h1 className="font-semibold text-lg text-gray-700">Data Tambahan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full">
            <Label>
              Tinggi Badan Saat Ibu (cm)<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Masukan tinggi ibu anak anda" className="w-full" />
          </div>
          <div className="w-full">
            <Label>Tinggi Badan Ayah (cm)<span className="text-red-500">*</span></Label>
            <Input placeholder="Masukan tinggi ayah anak anda" className="w-full" />
          </div>
        </div>
      </Card>

      <div className="w-full flex gap-4 justify-end">
        <Link href="/dashboard">
        <Button className="px-10" variant="outline">Batal</Button>
        </Link>
        <Button className="px-10" variant="default">Simpan</Button>
      </div>
    </form>
  )
}

export default FormAddAnak