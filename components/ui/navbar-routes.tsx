"use client";
// whenever we are using hooks we have to use use client


import { UserButton } from "@clerk/nextjs";
import { usePathname} from "next/navigation";
import {  LogOut } from "lucide-react";

import Link from "next/link"; 

import { Button } from "@/components/ui/button";

export const NavbarRoutes =() =>{

    const pathname = usePathname();

    // why we are using ?. because if we are not in teacher ? if we are in teacher
    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");

    return (
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                <Button>
                 <LogOut className="h-4 w-4 mr-2"/>
                    Exit
                </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm" variant="ghost">
                      Teacher mode
                    </Button>
                </Link>
            )}
            <UserButton 
                afterSignOutUrl="/"
            />
        </div>
    )
}