import BreadcrumbSementara from "./_components/breadcrumb";
import Step1 from "./_components/step-1";

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen p-8 bg-[#f1f5f9]">
      <BreadcrumbSementara/>
      <Step1/>
    </div>
  );
}
