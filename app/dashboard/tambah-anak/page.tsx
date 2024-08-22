import Step1 from "./_components/step-1";
import Step2 from "./_components/step-2";
import Step3 from "./_components/step-3";
import Step4 from "./_components/step-4";
import { Button } from "@/components/ui/button";

export default function TambahAnakPage() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />

      {/* Tombol Sementara*/}
      <div className="mt-6 flex space-x-4">
        <Button className="px-10" variant="outline">Batal</Button>
        <Button className="px-10" variant="secondary">Simpan</Button>
      </div>
    </div>
  );
}
