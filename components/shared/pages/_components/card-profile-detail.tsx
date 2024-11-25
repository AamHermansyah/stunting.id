import React from 'react'

interface IProps {
  label: string;
  value: string;
}

function CardProfileDetail({ label, value }: IProps) {
  return (
    <div className="text-sm leading-5">
      <h4 className="text-muted-foreground/70">{label}</h4>
      <span className="capitalize">{value}</span>
    </div>
  )
}

export default CardProfileDetail