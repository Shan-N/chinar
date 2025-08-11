import { Facebook, Instagram } from "lucide-react"
import { twMerge } from "tailwind-merge"


export const Footer = () => {
    return(
        <footer className="flex flex-col text-white">
            <div className="grid grid-rows-1 md:hidden pt-20 pb-4">
                <div className="flex flex-col">
                <span className="flex text-xl tracking-wide font-semibold">Location</span>
                <p className="text-lg font-medium py-4">Shop 21&amp;22, Bizzbay Mall, NIBM Road, Kondhwa, Pune</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3162120145776!2d73.89760457423594!3d18.469330582614358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb367a2bc7fd%3A0x41985c206066e774!2sChinar%20Hospitality%20and%20Catering!5e0!3m2!1sen!2sin!4v1754848615453!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" ></iframe>
                <hr className="border-white/30 mt-6" />
                <div className="flex flex-col py-8">
                    <span className="flex text-xl tracking-wide font-semibold">Contact Us</span>
                    <p className="py-4 text-lg font-light">We&apos;d be happy to hear from you! If you have any questions, comments, or suggestions, don&apos;t hesitate to reach out.</p>
                    <p className="py-2 text-lg font-light">We&apos;ll make sure to respond as quickly as possible!</p>
                    <span className="py-4 text-lg font-medium">Anshuman Sumbli: +91 96372 02111</span>
                    <span className="py-4 text-lg font-medium">Email: sumblianshu77@yahoo.com</span>
                    <div className="py-7 flex flex-col">
                        <span className="text-xl tracking-wide font-semibold">Connect with us</span>
                        <div className="py-4 flex flex-row gap-2">
                            <a className="p-0 m-0" href="https://www.instagram.com/chinarhospitalityandcatering/" target="__blank">
                                <Instagram className="size-8" />
                            </a>
                            <a className="p-0 m-0" href="https://www.facebook.com/chinarhospitality" target="__blank">
                                <Facebook className="size-8" />
                            </a>
                        </div>
                        <div className={twMerge("pt-10 text-white/60 text-center flex flex-col")}>
                            <span>Developed with 💗 by Perception Labs</span>
                            <span>&copy; {new Date().getFullYear()} Chinar Hospitality and Catering</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
             <div className="hidden md:grid md:grid-cols-2">
                    <div className="flex flex-col">
                    <span className="flex text-xl tracking-wide font-semibold">Location</span>
                    <p className="text-lg font-medium py-4">Shop 21 &amp; 22, Bizzbay Mall, NIBM Road, Kondhwa, Pune</p>
                    <iframe className="pr-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3162120145776!2d73.89760457423594!3d18.469330582614358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb367a2bc7fd%3A0x41985c206066e774!2sChinar%20Hospitality%20and%20Catering!5e0!3m2!1sen!2sin!4v1754848615453!5m2!1sen!2sin" width="100%" height="50%" loading="lazy" ></iframe>
                    </div>
                    <div className="border-l-[2px] border-white/30 rounded-xs px-6">
                        <div className="flex flex-col py-8">
                        <span className="flex text-xl tracking-wide font-semibold">Contact Us</span>
                        <p className="py-4 text-lg font-light">We&apos;d be happy to hear from you! If you have any questions, comments, or suggestions, don&apos;t hesitate to reach out.</p>
                        <p className="py-2 text-lg font-light">We&apos;ll make sure to respond as quickly as possible!</p>
                        <span className="py-4 text-lg font-medium">Anshuman Sumbli: +91 96372 02111</span>
                        <span className="py-4 text-lg font-medium">Email: sumblianshu77@yahoo.com</span>
                        <div className="py-7 flex flex-col">
                            <span className="text-xl tracking-wide font-semibold">Connect with us</span>
                            <div className="py-4 flex flex-row gap-2">
                                <a className="p-0 m-0" href="https://www.instagram.com/chinarhospitalityandcatering/" target="__blank">
                                    <Instagram className="size-8" />
                                </a>
                                <a className="p-0 m-0" href="https://www.facebook.com/chinarhospitality" target="__blank">
                                    <Facebook className="size-8" />
                                </a>
                            </div>
                        </div>
                </div>
                    </div>
            </div>
            <div className={twMerge("hidden md:flex pt-10 pb-2 text-white/60 text-center flex-col text-sm")}>
                <span>Developed with 💗 by Perception Labs</span>
                <span>&copy; {new Date().getFullYear()} Chinar Hospitality and Catering</span>
            </div>
        </footer>

    )
}
