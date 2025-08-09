import { Inter } from 'next/font/google';
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import chinarPng from '@/public/chinar_logo.png';
import Link from 'next/link'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const links = [
  {name: 'Home', href: '/'},
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = ({ isOpen, setIsOpen } : NavbarProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);


  const handleOpen = () => {
    setMenuVisible(true);
    setIsOpen(true);
  };


  const handleClose = () => {
    setMenuVisible(false);
  };


  const handleMenuExitComplete = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen ? (
        <>
          <div className='flex px-5 items-center text-center py-2 justify-between z-100'>
            <Link href='/' className='flex items-center text-center gap-2'>
              <Image src={chinarPng} alt='Chinar Logo' className='size-20' />
            </Link>
            <div className={twMerge('hidden md:flex items-center gap-6 px-4')}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='font-semibold text-center text-gray-800 text-sm'
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div
              className={`flex items-center text-center font-semibold gap-2 tracking-tight text-2xl ${inter.className} md:hidden`}
              onClick={handleOpen}
            >
               <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
              onClick={() => { setIsOpen(!isOpen); }}
            >
              <line x1="3" y1="12" x2="21" y2="12" className={twMerge(isOpen && 'opacity-0')}></line>
              <line x1="3" y1="6" x2="21" y2="6" className={twMerge('origin-left transition', isOpen && 'rotate-45 -translate-y-1')}></line>
              <line x1="3" y1="18" x2="21" y2="18" className={twMerge('origin-left transition', isOpen && '-rotate-45 translate-y-1')}></line>
            </svg>
            </div>
          </div>
          <hr className='border-gray-300' />
        </>
      ) : null}

      <AnimatePresence onExitComplete={handleMenuExitComplete}>
        {menuVisible && (
          <motion.div
            className={twMerge('flex flex-col text-black h-screen w-screen py-4 px-5 md:hidden', inter.className)}
            initial={{ opacity: 0, x: 100,  }}
            animate={{ opacity: 1, x: 0,  }}
            exit={{ opacity: 0, x: 100, }}
            ref={menuRef}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div
              className='flex justify-end pt-5'
            >
              <div
                onClick={handleClose}
                className='cursor-pointer'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </motion.div>
            <div className='flex flex-col gap-6 mt-10'>
              {links.map((link) => (
                <Link key={link.name} href={link.href} className='text-2xl flex items-center gap-4'>
                  {link.name} {/* <ArrowTopRightIcon className='size-10'/> */}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
