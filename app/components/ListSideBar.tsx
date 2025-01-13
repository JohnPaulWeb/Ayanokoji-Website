import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Inbox, Plus, Star } from "lucide-react"
import React from "react"

type List = {
    id: string
    name: string
    icon?: string
}

export  function ListSideBar() {
    const [lists, setLists] = React.useState<List[]>([
        { id: "inbox,", name: "Inbox", icon: "Inbox"},
        { id: "today", name: "Today", icon: "Star"}
    ])
    
    const [open, setOpen] = React.useState(false)
    const [selectedList, setSelectedList] = React.useState<string>("inbox")

    return (
        <div className="pb-12 w-64 border">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="space-y-1">
                        <h2 className="mb-2 px-4 text-x1 font-semibold tracking-tight">
                            Lists
                        </h2>
                        <div className="space-y-1">
                            {lists.map((list) => (
                                <Button
                                    key={list.id}
                                    variant="ghost"
                                    size="sm"
                                    className={cn("w-full justify-start", selectedList === list.id && "bg-accent")}
                                    onClick={() => setSelectedList(list.id)}
                                >
                                    {list.icon === "Inbox" ? (
                                        <Inbox className="mr-2 h-4 w-4" />
                                    ) : (
                                        <Star className="mr-2 h-4 w-4" />
                                    )}
                                    {list.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <div className="space-y-1">
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                            Custom Lists
                        </h2>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" size="sm" className="w-full justify-start">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add List
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" side="right" align="start">
                                <Command>
                                    <CommandInput placeholder="Search lists" />
                                    <CommandList>
                                        <CommandEmpty>No lists found</CommandEmpty>
                                        <CommandGroup>
                                            <CommandItem>
                                                <List className="mr-2 h-4 w-4" />
                                                <span>Work</span>
                                            </CommandItem>
                                            <CommandItem>
                                                <List className="mr-2 h-4 w-4" />
                                                <span>Personal</span>
                                            </CommandItem>
                                            <CommandItem>
                                                <List className="mr-2 h-4 w-4" />
                                                <span>Shopping</span>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    )
}