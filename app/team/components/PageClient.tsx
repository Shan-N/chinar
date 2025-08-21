'use client';
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const TeamClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={twMerge("bg-white", inter.className)}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {!isOpen && (
                <main className="flex flex-col justify-center items-center py-4 px-4 md:px-32">
                    
                </main>
            )}
        </div>
    )
}