import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamDetails = [
    { name: "Anshuman Sumbli", role: "Founding Director", src: '/anshuman.png' },
    { name: "Ritoo Sumbli", role: "Co-Founder, Director-Events", src: '/ritoosumbli.png' },
    { name: "Vijay Kaul", role: "Head Operations, J&K", src: '/vijaykaul.png' },
    { name: "Parveen Kumar", role: "Manager Operations", src: '/parveenkumar.png' },
    { name: "Mulak Raj", role: "Chef", src: '/mulakraj.png' },
    { name: "Rajesh", role: "Chef", src: '/rajesh.png' },
    { name: "Tilak", role:"Chef", src: '/tilak.png' }

]


export const Team = () => {
    return(
        <div className="w-full max-w-6xl mx-auto px-12 relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full relative"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {teamDetails.map((member, i) => (
                        <CarouselItem key={i} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <div className="flex flex-col justify-center items-center p-4">
                                <Image 
                                    src={member.src} 
                                    alt={member.name} 
                                    width={96} 
                                    height={96} 
                                    className="size-24 md:size-36 rounded-full mb-3 object-cover" 
                                    priority
                                />
                                <h3 className="font-semibold text-center text-sm md:text-base">{member.name}</h3>
                                <p className="text-xs md:text-sm text-gray-600 text-center">{member.role}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-9 top-1/2 -translate-y-1/2 bg-white border-2 border-[#bd0a0ac9] text-[#bd0a0ac9] hover:bg-[#bd0a0ac9] hover:text-white z-10" />
                <CarouselNext className="absolute -right-9 top-1/2 -translate-y-1/2 bg-white border-2 border-[#bd0a0ac9] text-[#bd0a0ac9] hover:bg-[#bd0a0ac9] hover:text-white z-10" />
            </Carousel>
        </div>
    );
}