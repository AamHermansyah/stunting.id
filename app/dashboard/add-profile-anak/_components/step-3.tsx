import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Step3 = () => {
  return (
    <Card className="my-3 p-4">
      <h1 className="font-semibold text-[20px] text-gray-700">
        Data Kesehatan
      </h1>
      <div className="flex flex-col space-y-6 my-4">

        <div className="w-full">
          <Label>
            Golongan Darah<span className="text-red-500">*</span>
          </Label>
          <div className="mt-2 text-gray-500 text-xs w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left">Pilih Golongan Darah Anak</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>A</DropdownMenuLabel>
                <DropdownMenuItem>B</DropdownMenuItem>
                <DropdownMenuItem>AB</DropdownMenuItem>
                <DropdownMenuItem>O</DropdownMenuItem>
                <DropdownMenuItem>Belum Mengetahui</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 space-y-3">
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

          {/* Prematur Section */}
          <div className="w-full md:w-1/2 space-y-3">
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
      </div>
    </Card>
  );
};

export default Step3;
