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
import { ImageCarousel } from "./components/ImageCarousel";
import weddingJson from '@/app/components/weddingImages.json';
import eventJson from '@/app/components/eventImages.json';
import cuisineJson from '@/app/components/cuisineImages.json';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("EVENT");
  const [selectedGallery, setSelectedGallery] = useState("WEDDING");
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
            <div className={twMerge("grid grid-cols-1 md:grid-cols-4 justify-center items-start gap-2", inter.className)}>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <Calendar1 className="size-6"/>
                <p className="leading-tight text-base font-bold">Wedding Planner</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <CookingPotIcon className="size-6"/>
                <p className="leading-tight text-base font-bold">Catering Services</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <Camera className="size-6"/>
                <p className="leading-tight text-base font-bold">Decor &amp; Photography</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <UsersIcon className="size-6"/>
                <p className="leading-tight text-base font-bold">Guest Management</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <LocationEdit className="size-6"/>
                <p className="leading-tight text-base font-bold">Destination Weddings</p>
              </div>
            </div>
          )}
          {selectedService === "DINE" && (
              <div className={twMerge("grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-2", inter.className)}>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <ForkKnife className="size-6"/>
                <p className="leading-tight text-base font-bold">Traditional Kashmiri Cuisine</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <LocationEdit className="size-6"/>
                <p className="leading-tight text-base font-bold">Best Ambience in South Pune</p>
              </div>
              <div className={twMerge("flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 md:border-neutral-900 hover:border-[#bd0a0ac9] gap-3")}>
                <Menu className="size-6"/>
                <p className="leading-tight text-base font-bold">Best Menu in South Pune</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className={twMerge("relative bg-transparent px-4 md:px-32 flex flex-col gap-4 py-4 overflow-hidden", inter.className)}>
        <h2 className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Gallery</h2>
        <MapleLeafBackground/>
        <h3 className="text-sm md:text-normal">At Chinar Hospitality, we turn life&apos;s special moments into remarkable celebrations filled with joy and love. Whether you are planning an intimate gathering or a grand occasion, we make every event unforgettable. Our team works closely with you, ensuring every detail aligns with your vision, especially when it comes to Kashmiri Pandit Weddings. With a dedicated wedding planner on hand, we craft seamless experiences that bring your dreams to life.</h3>
        <div className="flex flex-row gap-4 border-b-2 border-[#bd0a0ac9]/20">
          <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedGallery === "WEDDING" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedGallery("WEDDING")}>Events</span>
          <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedGallery === "EVENT" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedGallery("EVENT")}>Cuisine</span>
          <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedGallery === "DINE" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedGallery("DINE")}>Dine-In</span>
        </div>
        <div>
          {selectedGallery === 'WEDDING' && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-neutral-900">Weddings</h4>
                <div className="justify-center items-center">
                  <ImageCarousel grid={true} gallery={weddingJson} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-neutral-900">Events</h4>
                <div className="justify-center items-center">
                  <ImageCarousel grid={true} gallery={eventJson} />
                </div>
              </div>
            </div>
          )}
          {selectedGallery === 'EVENT' && (
              <div className="flex flex-col gap-4">
                <div className="justify-center items-center">
                  <ImageCarousel grid={true} gallery={cuisineJson} />
                </div>
              </div>
          )}
          {selectedGallery === 'DINE' && <p>Dine-In Gallery Content</p>}
        </div>
      </section>
      <section className={twMerge("relative bg-transparent px-4 md:px-32 flex flex-col gap-4 py-4 overflow-hidden", inter.className)}>
        <h2 className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Testimonials</h2>
        <h3 className="text-sm md:text-normal">Explore the rich and diverse flavors of Kashmiri cuisine, meticulously crafted to offer an unforgettable dining experience. Our culinary team takes pride in using the freshest ingredients and traditional recipes to create dishes that are not only delicious but also visually stunning.</h3>
      </section>
      </>
      )}
    </div>
  );
}
