import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function FormAddKader() {
  return (
    <form className="space-y-4">
      <Card className="p-4 sm:p-10 space-y-4">
        <h1 className="font-semibold text-lg text-gray-700 mb-4">
          Form Pendaftaran Kader Puskesmas
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <label className="block cursor-pointer w-max rounded-full">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>Profile Kader</AvatarFallback>
            </Avatar>

            <input type="file" className="hidden" />
          </label>

          <div className="w-full">
            <Label>
              NIK (Nomor Induk Kependudukan)
              <span className="text-red-500">*</span>
            </Label>
            <Input placeholder="-" className="w-full" />
          </div>

          <div className="w-full">
            <Label>
              Nama Kader<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="-" className="w-full" />
          </div>

          <div className="w-full">
            <Label>
              E-mail Kader<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="-" className="w-full" />
          </div>

          <div className="w-full space-y-3">
            <Label>
              Jenis Kelamin<span className="text-red-500">*</span>
            </Label>
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

          <div className="w-full">
            <Label>
              Tanggal Lahir<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="-" className="w-full" />
          </div>

          <div className="w-full">
            <Label>
              Alamat<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="-" className="w-full" />
          </div>
        </div>
      </Card>

      <div className="w-full flex gap-4 justify-end">
        <Button className="px-10" variant="outline">
          Batal
        </Button>
        <Button className="px-10" variant="default">
          Simpan
        </Button>
      </div>
    </form>
  );
}

export default FormAddKader;
