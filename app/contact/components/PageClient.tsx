'use client';

import { useState } from "react";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/app/components/ui/Navbar";
import MapleWhiteLeafBackground from "@/app/components/ui/MapleWhite";
import { Footer } from "@/app/components/Footer";
import { motion } from "motion/react";

const inter = Inter({
    subsets: ["latin"]
})

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" as const } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};


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
                            <h2 className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1">We&apos;re ready to assist you with any requests or inquiries you may have. Please feel free to reach out to us using the contact form below.</h2>
                            <iframe 
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfuRv3Wp7nsRQ-gEowEwp0SIM5NRyl0LL0mpY2ozOajeAxvZA/viewform?embedded=true" 
                                width="100%" 
                                height="1000" 
                                frameBorder="0" 
                                marginHeight={0}
                                marginWidth={0}
                            >
                                Loading…
                            </iframe>
                    </div>
                </main>
                <motion.section
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={twMerge("relative px-4 md:px-32 flex bg-[#bd0a0ac9] flex-col gap-4 py-4 overflow-hidden", inter.className)}
            >
              <MapleWhiteLeafBackground />
              <motion.h2 variants={fadeUp} className="font-bold text-white text-xl md:text-2xl">Visit Chinar Hospitality &amp; Dine In</motion.h2>
              <motion.span variants={fadeUp} className="text-sm md:text-normal text-white">
                Come see how we turn your vision into an amazing experience. We look forward to welcoming you with open arms! Plan a visit today and experience the Chinar Hospitality magic. We&apos;re excited to meet you!
              </motion.span>
              <Footer />
            </motion.section>
                </>
            )}
        </div>
    )
}