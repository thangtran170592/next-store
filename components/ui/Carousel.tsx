'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Slide } from '@/types/Slide';
import 'styles/carousel.scss'; // Ensure you have a CSS file for custom styles

import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import { mergeClass } from '@/lib/utils/mergeClass';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';

type CarouselPros = {
    label?: string;
    slides: Slide[];
    isNavigation?: boolean;
    isLoop?: boolean;
    autoplay?: boolean | AutoplayOptions;
    className?: string;
    breakpoints?: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    };
};

export default function Carousel({
    label,
    slides,
    isNavigation = true,
    isLoop = true,
    autoplay = false,
    breakpoints = {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
    },
    className,
}: CarouselPros) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div className='carousel-container flex flex-col gap-2 w-full mx-auto'>
            {label && (
                <h2 className='font-barlow-semi-condensed text-primary-normal font-black uppercase italic text-[2em]/[1.5em]'>{label}</h2>
            )}
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={isNavigation}
                autoplay={
                    autoplay
                        ? {
                              delay: 3000,
                              disableOnInteraction: false,
                          }
                        : false
                }
                loop={isLoop}
                breakpoints={breakpoints}
                className='w-full'
            >
                {slides?.map((item, idx) => (
                    <SwiperSlide key={idx} onClick={() => setActiveIndex(idx)} className='carousel-slide'>
                        <div className={mergeClass('relative w-full', activeIndex === idx && 'active', className && `${className}`)}>
                            <Image
                                src={item.image}
                                alt={`NFT ${item.title}`}
                                fill
                                priority={idx === 0}
                                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw'
                                className='object-cover rounded-xl'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
