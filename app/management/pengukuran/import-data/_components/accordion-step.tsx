import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface IProps {
  value: string;
  label: string;
  des: string;
  images: string;
}
function AccordionStep({ value, label, des, images }: IProps) {
  return (
    <>
      <AccordionItem value={value}>
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <p className="text-xs sm:text-sm">
              {des}
            </p>
            <div className="relative min-h-[70px] sm:h-[100px] lg:h-[150px] xl:h-[230px] w-full rounded-sm">
              <Image
                src={images}
                fill={true}
                alt="step1"
                className="sm:object-cover object-contain"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}

export default AccordionStep;
