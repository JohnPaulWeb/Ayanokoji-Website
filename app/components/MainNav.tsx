import { cn } from "@/lib/utils";
import Link from "next/link";


export function MainNav ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>

            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                       Overview
            </Link>
            <Link href="/calendar" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                         Calendar            
            </Link>
            <Link href="/reports" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                         Reports            
            </Link>
        </nav>
    )
}