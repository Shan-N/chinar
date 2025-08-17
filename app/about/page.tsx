'use client'
import { useState } from "react";
import { Navbar } from "../components/ui/Navbar";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import MapleLeafBackground from "../components/ui/Maple";


const inter = Inter({ subsets: ["latin"] });

const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={twMerge("bg-white", inter.className)}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {
                !isOpen && (
                    <>
                    <main className="flex flex-col py-8 px-4 md:px-32 gap-4">
                        <div className="flex flex-col gap-4">
                            {/* <MapleLeafBackground /> */}
                            <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">About Chinar Hospitality &amp; Catering</h1>
                            <h2 className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">Chinar Hospitality &amp; Catering is a premier luxury wedding planning company and fine dine-in restaurant specializing in authentic Kashmiri cuisine &amp; North Indian Cuisine. Founded in 2012 by Anshuman Sumbli, a renowned expert with over 20 years of experience, Chinar has established itself as a leader in the hospitality industry, known for its exceptional service, exquisite cuisine, and attention to detail.</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">Our Vision</h1>
                            <h2 className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">At Chinar Hospitality &amp; Catering, our vision is to create unforgettable experiences for our clients by providing exceptional service and exquisite cuisine. We strive to be the leading luxury wedding planning company and fine dine-in restaurant in the region, known for our attention to detail and commitment to excellence.</h2>
                        </div>
                    </main>
                    </>
                )
            }
        </div>
    )
}

export default AboutPage;