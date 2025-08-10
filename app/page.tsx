'use client';

import { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { Inter } from "next/font/google";
import heroBg from '@/public/hero_bg.png';
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Calendar1, Camera, CookingPotIcon, ForkKnife, LocationEdit, Menu, UsersIcon } from "lucide-react";
import MapleLeafBackground from "./components/ui/Maple";
import { ImageCarousel } from "./components/ImageCarousel";
import weddingJson from '@/app/components/weddingImages.json';
import eventJson from '@/app/components/eventImages.json';
import cuisineJson from '@/app/components/cuisineImages.json';
import dineJson from '@/app/components/dineInImages.json';
import MapleWhiteLeafBackground from "./components/ui/MapleWhite";
import { Team } from "./components/OurTeam";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ['latin'] });

// Animation variants
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
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("EVENT");
  const [selectedGallery, setSelectedGallery] = useState("WEDDING");

  return (
    <div className="bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen && (
        <>
          {/* Hero Section */}
          <main className="flex flex-col justify-center items-center py-8">
            <div className="relative px-4 rounded-lg container">
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full h-[400px] rounded-lg overflow-hidden"
              >
                <Image src={heroBg} alt="Hero Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className={twMerge(
                  "absolute inset-0 flex flex-col justify-center items-center text-center p-4",
                  inter.className
                )}
              >
                <motion.h1 variants={fadeUp} className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                  Chinar Hospitality and Catering
                </motion.h1>
                <motion.h2 variants={fadeUp} className="text-white text-sm font-normal mt-2 sm:text-base">
                  India&apos;s #1 Wedding Planning &amp; Kashmiri Culinary Destination
                </motion.h2>
              </motion.div>
            </div>
          </main>

          {/* About Us */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={twMerge("px-4 md:px-32 flex flex-col gap-4 py-4", inter.className)}
          >
            <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">About Us</motion.h2>
            <motion.p variants={fadeUp} className="text-sm md:text-normal">
              Since 2012, Chinar Hospitality is a Trusted name in crafting awesome weddings. As seasoned wedding planners, we are popular and specialized in Kashmiri Pandit Weddings. We blend traditional rituals with absolute modern elegance. We at Chinar aim to serve our clients with the utmost dedication and creativity. Our Dine-In experience is designed to offer a unique blend of traditional Kashmiri cuisine and modern culinary techniques, ensuring an unforgettable dining experience for our guests.
            </motion.p>
          </motion.section>

          {/* Services */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={twMerge("px-4 md:px-32 flex flex-col gap-4 py-4", inter.className)}
          >
            <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Our Services</motion.h2>
            <motion.p variants={fadeUp} className="text-sm md:text-normal">
              We offer a wide range of services to make your wedding day special, including venue selection, catering, decoration, and event management. Our team of experts will work with you to create a customized plan that fits your vision and budget.
            </motion.p>

            <div className="flex flex-row gap-4 border-b-2 border-[#bd0a0ac9]/20">
              <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedService === "EVENT" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedService("EVENT")}>Event Management</span>
              <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedService === "DINE" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedService("DINE")}>Dine-In</span>
            </div>

            <motion.div
              variants={staggerContainer}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true, amount: 0.2 }}
            >
              {selectedService === "EVENT" && (
                <div className={twMerge("grid grid-cols-1 md:grid-cols-4 justify-center items-start gap-2", inter.className)}>
                  {[
                    { icon: <Calendar1 className="size-6" />, label: "Wedding Planner" },
                    { icon: <CookingPotIcon className="size-6" />, label: "Catering Services" },
                    { icon: <Camera className="size-6" />, label: "Decor & Photography" },
                    { icon: <UsersIcon className="size-6" />, label: "Guest Management" },
                    { icon: <LocationEdit className="size-6" />, label: "Destination Weddings" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
                      className="flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 hover:border-[#bd0a0ac9] gap-3 transition-all duration-300"
                    >
                      {item.icon}
                      <p className="leading-tight text-base font-bold">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {selectedService === "DINE" && (
                <div className={twMerge("grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-2", inter.className)}>
                  {[
                    { icon: <ForkKnife className="size-6" />, label: "North Indian Cuisine" },
                    { icon: <ForkKnife className="size-6" />, label: "Traditional Kashmiri Cuisine" },
                    { icon: <LocationEdit className="size-6" />, label: "Best Ambience in South Pune" },
                    { icon: <Menu className="size-6" />, label: "Best Menu in South Pune" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
                      className="flex flex-row justify-center items-center py-6 px-0.5 rounded-lg border border-[#bd0a0ac9]/30 hover:border-[#bd0a0ac9] gap-3 transition-all duration-300"
                    >
                      {item.icon}
                      <p className="leading-tight text-base font-bold">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.section>

          {/* Gallery */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={twMerge("relative bg-transparent px-4 md:px-32 flex flex-col gap-4 py-4 overflow-hidden", inter.className)}
          >
            <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Gallery</motion.h2>
            <MapleLeafBackground />
            <motion.h3 variants={fadeUp} className="text-sm md:text-normal">
              At Chinar Hospitality, we turn life&apos;s special moments into remarkable celebrations filled with joy and love. Whether you are planning an intimate gathering or a grand occasion, we make every event unforgettable. Our team works closely with you, ensuring every detail aligns with your vision, especially when it comes to Kashmiri Pandit Weddings. With a dedicated wedding planner on hand, we craft seamless experiences that bring your dreams to life.
            </motion.h3>

            <div className="flex flex-row gap-4 border-b-2 border-[#bd0a0ac9]/20">
              <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedGallery === "WEDDING" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedGallery("WEDDING")}>Events</span>
              <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedGallery === "EVENT" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedGallery("EVENT")}>Cuisine</span>
              <span className={twMerge("font-bold text-neutral-900 cursor-pointer", selectedGallery === "DINE" && "border-b-3 border-[#bd0a0ac9]")} onClick={() => setSelectedGallery("DINE")}>Dine-In</span>
            </div>

            <motion.div variants={fadeIn}>
              {selectedGallery === 'WEDDING' && (
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-neutral-900">Weddings</h4>
                  <ImageCarousel grid={true} gallery={weddingJson} />
                  <h4 className="font-bold text-neutral-900">Events</h4>
                  <ImageCarousel grid={true} gallery={eventJson} />
                </div>
              )}
              {selectedGallery === 'EVENT' && (
                <ImageCarousel grid={true} gallery={cuisineJson} />
              )}
              {selectedGallery === 'DINE' && (
                <ImageCarousel grid={true} gallery={dineJson} />
              )}
            </motion.div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={twMerge("relative bg-transparent px-4 md:px-32 flex flex-col gap-4 py-4 overflow-hidden", inter.className)}
          >
            <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Testimonials</motion.h2>
            <motion.h3 variants={fadeUp} className="text-sm md:text-normal">
              Kashmir is known for its breathtaking landscapes, rich culture, and warm hospitality. At Chinar Hospitality, we strive to embody these qualities in every event we host. Our clients often share their experiences, highlighting the seamless service, exquisite cuisine, and attention to detail that set us apart.
            </motion.h3>

            <motion.div variants={staggerContainer} className="flex flex-col md:flex-row gap-4">
              {[
                { quote: "One of the Best Cuisines you can have in Pune. Specially the Kashmiri Cuisines are foodies delight. Delicious and good quality food is the forte.", author: "Vipin Bhat" },
                { quote: "Chinar has been most outstanding caterers , they have covered our events and served 1000s of guests . We would strongly recommend Chinar Hospitality and Catering Services.", author: "Vithal Chowdhary" },
                { quote: "I have some great experience of Chinar Hospitality. Anshuman is a thorough Gentleman with two decades of experience . You will love food & service..", author: "Sunil Raina" },
                { quote: "Few days ago ordered rohganosh from them. Taste was homely. Quality and quality both were descent. Service, packaging was also great.", author: "Vidi R" },
              ].map((t, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-col p-4 border border-[#bd0a0ac9]/30 rounded-lg">
                  <blockquote className="border-l-4 border-[#bd0a0ac9] pl-4 italic">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  <p className="mx-2 mt-2 font-bold">- {t.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={twMerge("relative px-4 md:px-32 flex flex-col overflow-hidden bg-[#bd0a0ac9] gap-4 py-4", inter.className)}
          >
            <MapleWhiteLeafBackground />
            <motion.h2 variants={fadeUp} className="font-bold text-white text-xl md:text-2xl">Achievements &amp; Recognition</motion.h2>
            <motion.div variants={fadeUp} className="flex justify-center items-center">
              <Image src='/award.jpg' alt="Mr and Mrs Sumbli accepting an award" width={640} height={360} className="size-72 z-10 object-cover" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col py-4 gap-4 text-white font-bold">
              <span className="flex flex-row">Awarded by <p className="italic">&quot;Pride of Maharashtra&quot;</p></span>
              <p className="text-white font-semibold">
                Chinar Hospitality has been recognized for its excellence in catering and event management, receiving this prestigious award from The Mirror Group.
              </p>
              <div className="flex flex-col">
                <blockquote className="border-l-4 border-white pl-4 italic">
                  &quot;This honor is particularly special to us, as it reflects the love and care we poured into our services, especially during the challenging times following the pandemic. It&apos;s a testament to our unwavering commitment to making every celebration extraordinary, no matter the circumstances. <p>With every event we craft, we continue to strive for excellence and bring joy to our guests.&quot;</p>
                </blockquote>
                <span className="text-white font-semibold px-2 py-2">- Anshuman Sumbli (Founding Director)</span>
              </div>
            </motion.div>
          </motion.section>

          {/* Team */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={twMerge("relative px-4 md:px-32 flex flex-col gap-4 py-4", inter.className)}
          >
            <motion.h2 variants={fadeUp} className="font-bold text-[#bd0a0ac9] text-xl md:text-2xl">Our Team</motion.h2>
            <motion.span variants={fadeUp} className="text-sm md:text-normal">Meet the talented individuals behind Chinar Hospitality.</motion.span>
            <motion.div variants={fadeIn} className="flex overflow-hidden">
              <Team />
            </motion.div>
          </motion.section>

          {/* Visit */}
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
  );
}
