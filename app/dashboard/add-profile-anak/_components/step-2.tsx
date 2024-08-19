import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step2 = () => {
  return (
    <Card className="my-3 p-4">
    <h1 className="font-semibold text-[20px] text-gray-700">Data Kelahiran</h1>
    <div className="flex flex-col md:flex-row justify-between items-center my-4">

      <div className="w-full mt-4 md:mt-0 space-y-3">
        <div className="w-full flex flex-col md:flex-row gap-4">
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
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
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
      </div>
    </div>
  </Card>
  )
}

export default Step2
