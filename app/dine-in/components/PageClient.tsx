'use client'
import { useState } from "react";
import { Inter } from "next/font/google";
import { motion } from "motion/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import genericPng from '@/public/generic_bg.png'
import interiorImage from '@/app/components/interiorImages.json';
import pcInterior from '@/app/components/pcInterior.json';
import { RollCTA } from "@/components/RollCTA";
import { Navbar } from "@/app/components/ui/Navbar";
import { Footer } from "@/app/components/Footer";
import MapleWhiteLeafBackground from "@/app/components/ui/MapleWhite";
import menuItems from '@/app/components/menuItems.json';

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

const inter = Inter({ subsets: ["latin"] });

const DineInComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {
        !isOpen && (
          <>
            <main className="flex flex-col justify-center items-center py-4 px-4 md:px-32">
              <div className="relative rounded-lg container">
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative w-full min-h-[150px] md:min-h-[218px] rounded-lg overflow-hidden"
                >
                  <Image src={genericPng} alt="Hero Background" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className={twMerge(
                    "absolute inset-0 flex flex-col justify-end items-start text-center p-4",
                    inter.className
                  )}
                >
                  <motion.h1 variants={fadeUp} className="text-white selection:bg-[#bd0a0ac9] text-2xl md:text-4xl ml-4 font-black leading-tight tracking-tight">
                    Dine In
                  </motion.h1>
                </motion.div>
              </div>
            </main>

            {/* Ambience Section */}
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={twMerge("flex flex-col py-4 px-4 md:px-32 gap-4", inter.className)}
            >
              <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Ambience &amp; Aesthetics</motion.h2>
              <motion.p variants={fadeUp} className="text-sm md:text-normal">
                We create a warm and inviting atmosphere for our guests, with elegant decor and attention to detail. Our restaurant features beautiful furnishings, soft lighting, and a carefully curated ambiance that enhances the dining experience.
              </motion.p>
              <motion.p variants={fadeUp} className="text-sm md:text-normal">World-class service is at the heart of our dining experience. Our attentive staff is dedicated to providing personalized service, ensuring that every guest feels special and well taken care of.</motion.p>

              <motion.div variants={staggerContainer} className="flex flex-col md:flex-row gap-4">
                {pcInterior.map((image, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative w-full h-[480px] hidden md:flex"
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
                      fill
                      priority
                      className={twMerge(image.className, 'object-cover rounded-lg')}
                    />
                  </motion.div>
                ))}
                {interiorImage.map((image,i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full h-64 md:hidden"
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
                      fill
                      priority
                      className={twMerge(image.className, 'object-cover rounded-lg')}
                    />
                  </motion.div>
                ))}
                <motion.p variants={fadeUp} className="md:hidden text-sm text-center text-neutral-900">Ambience Chinar Dine-In</motion.p>
              </motion.div>
            </motion.section>

            <RollCTA />

            {/* Menu Section */}
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={twMerge("flex flex-col py-4 px-4 md:px-32 gap-4", inter.className)}
            >
              <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Our Menu</motion.h2>
              <motion.p variants={fadeUp} className="text-sm md:text-normal">
                Experience some of the finest Kashmiri, North Indian, and Mughlai cuisines, thoughtfully prepared by our expert chefs. Our menu features a diverse selection of dishes, from traditional favorites to contemporary creations, ensuring a memorable dining experience for every palate.
              </motion.p>
              <motion.div variants={fadeUp} className="flex overflow-hidden rounded-lg border border-[#e7d0d0] bg-[#fcf8f8]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#fcf8f8]">
                      <th className="px-4 py-3 text-left text-[#1b0e0e] w-[400px] text-sm font-medium leading-normal">Dish</th>
                      <th className="px-4 py-3 text-left text-[#1b0e0e] w-[400px] text-sm font-medium leading-normal">Description</th>
                      <th className="px-4 py-3 text-left text-[#1b0e0e] w-[400px] text-sm font-medium leading-normal">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.map((item,i) => (
                      <motion.tr
                        key={i}
                        variants={fadeUp}
                        className="border-t border-t-[#e7d0d0] hover:bg-[#f7ecec] transition-colors"
                      >
                        <td className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium">{item.name}</td>
                        <td className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-normal">{item.description}</td>
                        <td className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-normal">₹ {item.price}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.section>

            {/* Final CTA */}
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
        )
      }
    </div>
  )
}

export default DineInComponent;
