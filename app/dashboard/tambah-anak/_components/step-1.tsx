import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step1 = () => {
  return (
    <Card className="my-3 p-4">
    <h1 className="font-semibold text-[20px] text-gray-700">Profile Anak</h1>
    <div className="flex flex-col md:flex-row justify-between items-center my-4">
      <div className="w-full md:w-1/4 justify-center items-center">
        <Avatar className="aspect-square w-[150px] h-[150px] mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>Profile Anak</AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full md:w-3/4 mt-4 md:mt-0">
        <div className="w-full flex flex-col md:flex-row gap-4">
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
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
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
      </div>
    </div>
  </Card>
  )
}

export default Step1
