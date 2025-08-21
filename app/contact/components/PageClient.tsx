'use client';

import { useState } from "react";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/app/components/ui/Navbar";

const inter = Inter({
    subsets: ["latin"]
})

export const ContactClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={twMerge("bg-white", inter.className)}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {!isOpen && (
                <>                
                <main className="flex flex-col py-8 px-4 md:px-32 gap-4">
                    <div className="flex flex-col gap-4">
                            <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">Contact Us</h1>
                            <h2 className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">Founded in 2012, Chinar Hospitality & Catering has grown into a trusted name in premium Catering and Hospitality services. Headquartered in Pune, we proudly serve clients across India and internationally, offering tailored experiences for weddings, corporate events, and special occasions.</h2>
                            <p className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">Renowned for our expertise in authentic Kashmiri cuisine, we also offer a diverse selection of Indian and global culinary delights. Our approach combines creativity and innovation with the rich, traditional flavors of Kashmir—resulting in fresh, flavorful, and unforgettable experiences.</p>
                    </div>
                </main>
                </>
            )}
        </div>
    )
}