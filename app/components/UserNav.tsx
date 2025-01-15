import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

import { User } from "next-auth"
import { signOut } from "../auth/auth"

interface UserNavProps {
    user: User | null
}

export default function UserNav({ user }: UserNavProps) {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Image className="h-8 w-8 rounded-full" src={user?.image ?? "/"} alt={user?.name ?? "User avatar"} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user?.name}</p>

                        <p className="text-xs leading-none text-muted-foreground">
                            {user?.email}
                        </p>

                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onSelect={() => signOut()}>
                    Log out
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    )
}