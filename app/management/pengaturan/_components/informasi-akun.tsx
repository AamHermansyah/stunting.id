import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const InfromasiAkun = () => {
  return (
    <>
      <div className="p-1 grid grid-cols-1 gap-4">
        <Card className="p-4 space-y-3">
          <h3 className="font-semibold text-lg text-gray-700">
            Informasi Akun
          </h3>
          <label className="block cursor-pointer w-max rounded-full">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>Profile Akun</AvatarFallback>
            </Avatar>

            <input type="file" className="hidden" />
          </label>

          <div className="w-full">
            <Label>
              Username
              <span className="text-red-500">*</span>
            </Label>
            <Input placeholder="flyTurtle01284129" className="w-full" />
          </div>

          <div className="w-full">
            <Label>
              E-Mail<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Username@gmail.com" className="w-full" />
          </div>
        </Card>

        <Card className="p-4 space-y-3">
          <h3 className="font-semibold text-lg text-gray-700">
            Informasi Pribadi
          </h3>

          <div className="w-full">
            <Label>
              Nama<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Syafira Humaira" className="w-full" />
          </div>

          <div className="w-full">
            <Label>
              Alamat<span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Jl. Diponegoro No. 93, Tasikmalaya, JT 94394"
              className="w-full"
            />
          </div>

          <div className="w-full">
            <Label>
              NIK<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="3305042302490002" className="w-full" />
          </div>
        </Card>

        <div className="w-full flex gap-4 justify-start">
          <Link href="/management">
          <Button className="px-16" variant="outline">
            Batal
          </Button>
          </Link>
          <Button className="px-16" variant="default">
            Simpan
          </Button>
        </div>
      </div>
    </>
  );
};

export default InfromasiAkun;
