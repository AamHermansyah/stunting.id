import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const KeamananAkun = () => {
  return (
    <>
      <div className="p-1 grid grid-cols-1 gap-4">
        <Card className="p-4 space-y-3">
          <h3 className="font-semibold text-lg text-gray-700">
            Keamanan Akun
          </h3>

          <div className="w-full">
            <Label>
              Ubah Password
              <span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Masukkan password baru" className="w-full" />
          </div>

          <div className="w-full">
            <Label>
              Konfirmasi Password<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Masukkan kembali password baru" className="w-full" />
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

export default KeamananAkun;
