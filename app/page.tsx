'use client';

import { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { Inter } from "next/font/google";
import heroBg from '@/public/hero_bg.png';
import Image from "next/image";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
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
    </div>
  );
}
