'use client';

import { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { Inter } from "next/font/google";
import heroBg from '@/public/hero_bg.png';
import Image from "next/image";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { Calendar1, Camera, CookingPotIcon, ForkKnife, LocationEdit, Menu, UsersIcon } from "lucide-react";
import MapleLeafBackground from "./components/ui/Maple";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("EVENT");
  return (
    <div className="bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen && (
      <>
      <main className="flex flex-col justify-center items-center py-8">
        <div className="relative px-4 rounded-lg container">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={heroBg}
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
          </div>

          <div
            className={twMerge(
              "absolute inset-0 flex flex-col justify-center items-center text-center p-4",
              inter.className
            )}
          >
            <motion.h1 

              className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Chinar Hospitality and Catering
            </motion.h1>
            <motion.h2 className="text-white text-sm font-normal mt-2 sm:text-base ">
              India&apos;s #1 Wedding Planning &amp; Kashmiri Culinary Destination
            </motion.h2>
          </div>
        </div>
      </main>
      <section className={twMerge("px-4 md:px-32 flex flex-col gap-4 py-4", inter.className)}>
          <h2 className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">About Us</h2>
          <p className="text-sm md:text-normal">Since 2012, Chinar Hospitality is a Trusted name in crafting awesome weddings. As seasoned wedding planners, we are popular and specialized in Kashmiri Pandit Weddings. We blend traditional rituals with absolute modern elegance. We at Chinar aim to serve our clients with the utmost dedication and creativity. Our Dine-In experience is designed to offer a unique blend of traditional Kashmiri cuisine and modern culinary techniques, ensuring an unforgettable dining experience for our guests.</p>
      </section>
      <section className={twMerge("px-4 md:px-32 flex flex-col gap-4 py-4", inter.className)}>
        <h2 className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Our Services</h2>
        <p className="text-sm md:text-normal">We offer a wide range of services to make your wedding day special, including venue selection, catering, decoration, and event management. Our team of experts will work with you to create a customized plan that fits your vision and budget.</p>
        <div className="flex flex-row gap-4 border-b-2 border-[#bd0a0ac9]/20">
          <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedService === "EVENT" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedService("EVENT")}>Event Management</span>
          <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedService === "DINE" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedService("DINE")}>Dine-In</span>
        </div>
        <div>
          {selectedService === "EVENT" && (
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start gap-2">
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <Calendar1 className="size-6"/>
                <p>Wedding Planner</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <CookingPotIcon className="size-6"/>
                <p>Catering Services</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <Camera className="size-6"/>
                <p>Decor &amp; Photography</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <UsersIcon className="size-6"/>
                <p>Guest Management</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <LocationEdit className="size-6"/>
                <p>Destination Weddings</p>
              </div>
            </div>
          )}
          {selectedService === "DINE" && (
              <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-2">
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <ForkKnife className="size-6"/>
                <p>Traditional Kashmiri Cuisine</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <LocationEdit className="size-6"/>
                <p>Best Ambience in South Pune</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3", inter.className)}>
                <Menu className="size-6"/>
                <p>Best Menu in South Pune</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className={twMerge("relative bg-transparent px-4 md:px-32 flex flex-col gap-4 py-4 overflow-hidden", inter.className)}>
        <h2 className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Gallery</h2>
        <MapleLeafBackground/>
        <h3 className="text-sm md:text-normal">At Chinar Hospitality, we turn life&apos;s special moments into remarkable celebrations filled with joy and love. Whether you are planning an intimate gathering or a grand occasion, we make every event unforgettable. Our team works closely with you, ensuring every detail aligns with your vision, especially when it comes to Kashmiri Pandit Weddings. With a dedicated wedding planner on hand, we craft seamless experiences that bring your dreams to life.</h3>
        <div className="">
          
        </div>
      </section>
      </>
      )}
    </div>
  );
}
