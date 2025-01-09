import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"


interface UserNavProps {
    user: User
}

export default function UserNav() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Image className="h-8 w-8 rounded-full" src={user.image ?? "/"} alt={user.name ?? "User avatar"} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">Welcome to the World</p>
                    </div>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}