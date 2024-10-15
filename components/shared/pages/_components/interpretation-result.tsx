import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from '@/components/ui/separator'
import { CiCircleQuestion } from 'react-icons/ci'
import { FaRegThumbsUp } from 'react-icons/fa'

function InterpretationResult() {
  return (
    <div className="p-4 bg-primary/10 rounded-lg space-y-4">
      <div className="w-full flex flex-wrap justify-between gap-x-4 gap-y-2">
        <h1 className="text-lg font-semibold">Interpretasi Grafik WHO</h1>
        <h1 className="font-medium text-sm sm:text-base text-primary flex gap-2 items-center">
          <FaRegThumbsUp /> Tinggi badan normal
        </h1>
      </div>
      <div className="w-full sm:flex items-center sm:space-x-4 space-y-2 text-sm">
        <div className="space-y-1">
          <h6 className="text-xs text-muted-foreground/80">Waktu Checkup</h6>
          <p>21 Juli 2024</p>
        </div>
        <Separator orientation="vertical" className="hidden sm:block w-0.5 h-12" />
        <div className="space-y-1">
          <h6 className="text-xs text-muted-foreground/80">Usia</h6>
          <p>0 Tahun 4 Bulan 3 Hari</p>
        </div>
        <Separator orientation="vertical" className="hidden sm:block w-0.5 h-12" />
        <div className="space-y-1">
          <h6 className="text-xs text-muted-foreground/80">Tinggi</h6>
          <p>63 cm</p>
        </div>
        <Separator orientation="vertical" className="hidden sm:block w-0.5 h-12" />
        <div className="space-y-1">
          <div className="flex gap-2 items-center">
            <h6 className="text-xs text-muted-foreground/80">zScore</h6>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-full text-muted-foreground">
                    <CiCircleQuestion />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs text-muted-foreground/80 max-w-sm">
                    Nilai simpangan berat badan atau tinggi badan dari
                    nilai berat badan atau tinggi badan normal
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p>-0.39</p>
        </div>
      </div>
      <div className="space-y-2 sm:space-y-4 text-gray-500 text-sm sm:text-base text-justify">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, exercitationem. Autem voluptatum quasi sequi illo enim, neque reiciendis, quidem nam molestias voluptate laboriosam odio, atque dolore voluptas aspernatur! Modi, quit. Voluptatibus quaerat, culpa tenetur nostrum fugit omnis debitis explicabo itaque ipsam aspernatur praesentium obcaecati!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat, culpa tenetur nostrum fugit omnis debitis explicabo itaque ipsam aspernatur praesentium obcaecati! Optio, veritatis nemo nihil totam ad unde esse quaerat, cupiditate consequuntur ipsam atque consequatur aliquid perspiciatis explicabo perferendis quidem. Commodi voluptatibus ipsum, fuga voluptates laudantium recusandae! Dolores numquam officiis possimus. Neque expedita ipsa ducimus illum nihil. Accusamus iure, temporibus modi doloribus fugiat quas, aspernatur magni ducimus nostrum libero debitis repellat, illo voluptatem dicta nesciunt voluptate placeat quod nobis!
        </p>
      </div>
    </div>
  )
}

export default InterpretationResult