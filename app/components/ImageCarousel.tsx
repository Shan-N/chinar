'use client';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const ImageCarousel = ({gallery}: {gallery: ImageProps[]}) => {
    return(
        <Carousel plugins={[
            Autoplay({
                delay: 5000,
                stopOnInteraction: false
            })
        ]} className="flex justify-center items-center">
            <CarouselContent className="">
                {gallery?.map((image, index) => (
                    <CarouselItem key={index} className="flex justify-center items-center">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            priority
                            width={500}
                            height={500}
                            className={twMerge(image.className, 'object-cover size-64 md:size-[480px]')}
                        />
                    </CarouselItem>
                ))}

            </CarouselContent>
        </Carousel>
    )
}