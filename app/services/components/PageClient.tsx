'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/components/ui/Navbar";
import { motion } from "motion/react";
import { Calendar1, Camera, CookingPotIcon, UsersIcon } from "lucide-react";
import { desc } from "motion/react-client";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
};


const inter = Inter({ subsets: ["latin"] });


export const ServicesClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={twMerge("bg-white", inter.className)}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {!isOpen && (
                <>                
                <main className="flex flex-col py-8 px-4 md:px-32 gap-4">
                    <h1 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">Our Services</h1>
                    <h2 className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">Chinar Hospitality &amp; Catering offers a comprehensive suite of services to make your special event unforgettable. From exquisite Kashmiri cuisine to meticulous
                  event planning, we handle every detail with precision and care.</h2>
                </main>
                <section className={twMerge("flex flex-col px-4 md:px-32 gap-4")}>
                    <h2 className="text-lg md:text-2xl text-[#bd0a0ac9] font-bold">Wedding Planning</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                        {[
                                            { icon: <Calendar1 className="size-6" />, label: "Wedding Planner", description: "Comprehensive wedding planning services to ensure your special day is flawless and memorable." },
                                            { icon: <CookingPotIcon className="size-6" />, label: "Catering Services", description: "Exquisite Kashmiri cuisine tailored to your event's needs." },
                                            { icon: <Camera className="size-6" />, label: "Decor & Photography", description: "Stunning decor and photography services to capture every moment." },
                                            { icon: <UsersIcon className="size-6" />, label: "Guest Management", description: "Seamless guest management to ensure a smooth experience." }
                                          ].map((item, idx) => (
                                            <motion.div
                                              key={idx}
                                              variants={fadeUp}
                                              className="flex flex-col justify-start py-4 px-2 md:px-4 rounded-lg border border-[#bd0a0ac9]/30 hover:border-[#bd0a0ac9] gap-3 transition-all duration-300"
                                            >
                                                <div>
                                                {item.icon}
                                                </div>
                                              <div className="flex flex-col gap-3">
                                                <p className="leading-tight text-base font-bold">{item.label}</p>
                                                <p className="leading-tight text-sm font-normal text-[#bd0a0ac9]/70">{item.description}</p>
                                              </div>
                                            </motion.div>
                                          ))}
                    </div>
                    <h3 className=""></h3>
                </section>
                </>
                
            )}
        </div>
    )
}