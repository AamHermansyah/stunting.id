import { LogOut } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { MENU_PROFILE, NAVBAR } from "../../../constants"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { logout } from "@/actions/logout"

export function MenuProfil() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <div className="sm:hidden block">
          <DropdownMenuLabel>Navigasi</DropdownMenuLabel>
          <div className="space-y-0.5">
            {NAVBAR.map((item) => (
              <DropdownMenuItem key={item.id}>
                <Link className="w-full"
                  key={item.id}
                  href={item.href}
                >
                  <item.Icon className="mr-2 h-4 w-4 inline-block" />
                  {item.label}

                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-0.5">
          {MENU_PROFILE.map((item) => (
            <DropdownMenuItem key={item.id}>
              <Link
                className="w-full"
                href={item.href}
              >
                <item.Icon className="mr-2 h-4 w-4 inline-block" />
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-destructive hover:!text-destructive"
          onClick={(e) => e.preventDefault()}
        >
          <button onClick={() => logout()} className="w-full text-left">
            <LogOut className="mr-2 h-4 w-4 inline-block" />
            <span>Log out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
