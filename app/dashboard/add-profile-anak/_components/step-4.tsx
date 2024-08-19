import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step4 = () => {
  return (
    <Card className="my-3 p-4">
    <h1 className="font-semibold text-[20px] text-gray-700">Data Tambahan</h1>
    <div className="flex flex-col md:flex-row justify-between items-center my-4">

      <div className="w-full mt-4 md:mt-0 space-y-3">
        <div className="w-full flex flex-col md:flex-row gap-4">
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
      </div>
    </div>
  </Card>
  )
}

export default Step4
