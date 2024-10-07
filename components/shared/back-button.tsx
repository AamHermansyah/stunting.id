import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button';

function BackButton({ className = '' }: { className?: string }) {
  const navigate = useRouter();
  return (
    <Button
      variant="ghost"
      className={cn('flex items-center gap-2 my-2 px-0 hover:underline hover:bg-background', className)}
      onClick={() => navigate.back()}
    >
      <BsArrowLeft />
      Back
    </Button>
  )
}

export default BackButton