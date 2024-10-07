"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

type CheckedValue = {
  id: string | number;
  label: string;
  value: string;
}[];

type PropTypes = {
  value?: CheckedValue;
  onChange?: (data: CheckedValue) => void;
  listItems: CheckedValue;
}

export function SelectCheckboxes({ value, onChange, listItems }: PropTypes) {
  const [checkedValue, setCheckedValue] = React.useState<CheckedValue>(value || []);

  const handleChecked = (item: CheckedValue[0]) => {
    setCheckedValue((prev) => {
      let current: CheckedValue = [];

      if (prev.some((tag) => tag.id === item.id)) {
        current = prev.filter((tag) => tag.id !== item.id);
      } else current = [...prev, item];

      if (onChange) onChange(current);

      return current;
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="block w-full">
        {checkedValue.length === 0 ? (
          <Button
            variant="outline"
            className="flex justify-between text-left hover:bg-background text-muted-foreground hover:text-muted-foreground"
          >
            Pilih Tags
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        ) : (
          <Button
            variant="outline"
            className="text-left hover:bg-background hover:text-foreground capitalize"
          >
            {checkedValue.filter((tag, index) => index < 3).map((tag) => tag.value).join(', ')}
            {checkedValue.length > 3 && '...'}
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-[200px] overflow-y-auto custom-scrollbar">
        <DropdownMenuLabel>Daftar Tag Artikel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {listItems.map((tag) => (
          <DropdownMenuCheckboxItem
            key={tag.id}
            className="capitalize"
            checked={checkedValue.some((item) => item.id === tag.id)}
            onClick={(e) => {
              e.preventDefault();
              handleChecked(tag);
            }}
          >
            {tag.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
