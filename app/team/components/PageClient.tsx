'use client';
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/components/ui/Navbar";
import Image from "next/image";
import MapleWhiteLeafBackground from "@/app/components/ui/MapleWhite";
import { motion } from "framer-motion";
import { Footer } from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const teamDetails = [
  { name: "Anshuman Sumbli", role: "Founding Director", src: '/anshuman.png' },
  { name: "Ritoo Sumbli", role: "Co-Founder, Director-Events", src: '/ritoosumbli.png' }
]

const managementDetails = [
  { name: "Vijay Kaul", role: "Head Operations, J&K", src: '/vijaykaul.png' },
  { name: "Parveen Kumar", role: "Manager Operations", src: '/parveenkumar.png' }
]

const chefsDetails = [
  { name: "Mulak Raj", role: "Chef", src: '/mulakraj.png' },
  { name: "Rajesh", role: "Chef", src: '/rajesh.png' },
  { name: "Tilak", role:"Chef", src: '/tilak.png' }
]

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

export const TeamClient = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={twMerge("bg-white", inter.className)}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen && (
        <>                
        <main className="flex flex-col py-8 px-4 md:px-32 gap-4">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[#bd0a0ac9] font-bold"
          >
            Our Team
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#1b0e0e] text-sm font-normal leading-normal pb-3 pt-1"
          >
            Meet the dedicated professionals behind Chinar Hospitality & Catering. Our team is committed to delivering exceptional service and creating memorable experiences for our clients.
          </motion.p>
        </main>

          {/* Leadership */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="px-4 md:px-32 flex flex-col gap-4"
          >
            <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Leadership</motion.h2>
            <div className="grid grid-cols-2 gap-4">
              {teamDetails.map((member) => (
                <motion.div key={member.name} variants={fadeUp} className="flex flex-col items-center">
                  <Image src={member.src} alt={member.name} width={96} height={96} className="w-56 h-56 aspect-auto rounded-full" />
                  <h3 className="font-bold text-[#1b0e0e]">{member.name}</h3>
                  <p className="text-sm text-center text-[#1b0e0e]">{member.role}</p>
                </motion.div>
              ))}
            </div>
            {/* ✅ description restored */}
            <motion.div variants={fadeIn} className="flex flex-col gap-4 mt-4">
              <p>
                Anshuman Sumbli, With over a decade of experience in the hospitality industry, Anshuman brings visionary leadership and a passion for excellence to Chinar Hospitality & Catering. His commitment to quality and innovation has been instrumental in the company's growth and success.
              </p>
              <p>
                Ritoo Sumbli, Ritoo is the creative force behind our event planning and execution. Her keen eye for detail and dedication to client satisfaction ensure that every event we handle is unique and flawlessly executed.
              </p>
            </motion.div>
          </motion.section>

          {/* Management */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative px-4 md:px-32 flex flex-col gap-4 py-8 mt-4 bg-[#bd0a0ac9] text-white overflow-hidden"
          >
            <MapleWhiteLeafBackground />
            <motion.h2 variants={fadeUp} className="font-bold text-white text-xl md:text-2xl z-10">Management</motion.h2>
            <div className="grid grid-cols-2 gap-4 z-10">
              {managementDetails.map((member) => (
                <motion.div key={member.name} variants={fadeUp} className="flex flex-col items-center">
                  <Image src={member.src} alt={member.name} width={96} height={96} className="w-56 h-56 aspect-auto rounded-full" />
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-center text-white">{member.role}</p>
                </motion.div>
              ))}
            </div>
            {/* ✅ description restored */}
            <motion.div variants={fadeIn} className="flex flex-col gap-4 mt-4 z-10">
              <p>
                Operations and Management Team, Our operations team, led by Vijay Kaul and Parveen Kumar, ensures that every event runs smoothly from start to finish. Their expertise in logistics and coordination is vital to our ability to deliver exceptional service.
              </p>
            </motion.div>
          </motion.section>

          {/* Head Chefs */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="px-4 md:px-32 flex flex-col gap-4 py-8"
          >
            <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Head Chefs</motion.h2>
            <div className="grid grid-cols-2 gap-4">
              {chefsDetails.map((member) => (
                <motion.div key={member.name} variants={fadeUp} className="flex flex-col items-center">
                  <Image src={member.src} alt={member.name} width={96} height={96} className="w-56 h-56 aspect-auto rounded-full" />
                  <h3 className="font-bold text-[#1b0e0e]">{member.name}</h3>
                  <p className="text-sm text-center text-[#1b0e0e]">{member.role}</p>
                </motion.div>
              ))}
            </div>
            {/* ✅ description restored */}
            <motion.div variants={fadeIn} className="flex flex-col gap-4 mt-4">
              <p>
                Our head chefs, led by three of our best chefs, bring a wealth of culinary expertise and creativity to our kitchen. They are dedicated to using the finest ingredients and innovative techniques to create unforgettable dining experiences for our clients.
              </p>
            </motion.div>
          </motion.section>

        {/* CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative px-4 md:px-32 flex bg-[#bd0a0ac9] flex-col gap-4 py-4 overflow-hidden"
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
