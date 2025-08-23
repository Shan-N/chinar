'use client'
import { useState } from "react";
import { Navbar } from "@/app/components/ui/Navbar";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import MapleLeafBackground from "@/app/components/ui/Maple";


const inter = Inter({ subsets: ["latin"] });

const AboutClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={twMerge("bg-white", inter.className)}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {
                !isOpen && (
                    <>
                    <main className="flex flex-col py-8 px-4 md:px-32 gap-4">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">About Chinar Hospitality &amp; Catering</h1>
                            <h2 className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">Founded in 2012, Chinar Hospitality & Catering has grown into a trusted name in premium Catering and Hospitality services. Headquartered in Pune, we proudly serve clients across India and internationally, offering tailored experiences for weddings, corporate events, and special occasions.</h2>
                            <p className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">Renowned for our expertise in authentic Kashmiri cuisine, we also offer a diverse selection of Indian and global culinary delights. Our approach combines creativity and innovation with the rich, traditional flavors of Kashmir—resulting in fresh, flavorful, and unforgettable experiences.</p>
                        </div>
                        <div className="flex md:hidden flex-col gap-4">
                            <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">Our Vision</h1>
                            <p className="text-[#1b0e0e] font-normal leading-normal pb-3 pt-1"><span className="text-2xl font-bold text-[#bd0a0ac9]">C</span>ompassionate to create lovely ambience to celebrate happiness!</p>
                            <p className="text-[#1b0e0e] font-normal leading-normal pb-3 pt-1"><span className="text-2xl font-bold text-[#bd0a0ac9]">H</span>ospitable to provide utmost care to all guests!</p>
                            <p className="text-[#1b0e0e] font-normal leading-normal pb-3 pt-1"><span className="text-2xl font-bold text-[#bd0a0ac9]">I</span>ncredible to make your special day as unique as you are!</p>
                            <p className="text-[#1b0e0e] font-normal leading-normal pb-3 pt-1"><span className="text-2xl font-bold text-[#bd0a0ac9]">N</span>etworked globally as experts in hospitality and Catering Services!</p>
                            <p className="text-[#1b0e0e] font-normal leading-normal pb-3 pt-1"><span className="text-2xl font-bold text-[#bd0a0ac9]">A</span>dmired globally for our commendable and phenomenal services!</p>
                            <p className="text-[#1b0e0e] font-normal leading-normal pb-3 pt-1"><span className="text-2xl font-bold text-[#bd0a0ac9]">R</span>ecognized and recommendable for making your dreams a complete celebration!</p>

                            <div className="flex flex-row gap-9 items-center justify-center py-10">
                                <span className="text-3xl font-bold text-[#bd0a0ac9]">C</span>
                                <span className="text-3xl font-bold text-[#bd0a0ac9]">H</span>
                                <span className="text-3xl font-bold text-[#bd0a0ac9]">I</span>
                                <span className="text-3xl font-bold text-[#bd0a0ac9]">N</span>
                                <span className="text-3xl font-bold text-[#bd0a0ac9]">A</span>
                                <span className="text-3xl font-bold text-[#bd0a0ac9]">R</span>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col gap-4">
                            <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">Our Vision</h1>
                            
                        </div>
                    </main>
                    </>
                )
            }
        </div>
    )
}

export default AboutClient;