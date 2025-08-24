'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/components/ui/Navbar";


const inter = Inter({ subsets: ["latin"] });


export const ServicesClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={twMerge("bg-white", inter.className)}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {!isOpen && (
                <main className="flex flex-col py-8 px-4 md:px-32 gap-4">
                    <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">Our Services</h1>
                    <h2 className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">Chinar Hospitality &amp; Catering offers a comprehensive suite of services to make your special event unforgettable. From exquisite Kashmiri cuisine to meticulous
                  event planning, we handle every detail with precision and care.</h2>
                </main>
            )}
        </div>
    )
}