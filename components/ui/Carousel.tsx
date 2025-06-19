'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Slide } from '@/types/Slide';
import 'styles/carousel.scss'; // Ensure you have a CSS file for custom styles

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import { mergeClass } from '@/lib/utils/mergeClass';

type CarouselPros = {
    label?: string;
    slides: Slide[];
    spaceBetween?: number;
    slidesPerView?: number;
    slidesPerGroup?: number;
    hasNavigation?: boolean;
    hasLoop?: boolean;
    className?: string;
    aspectRatio?: string; // Optional aspect ratio for slides
};

export default function Carousel({
    label,
    slides,
    spaceBetween = 16,
    slidesPerView = 1,
    slidesPerGroup = 1,
    hasNavigation = false,
    hasLoop = false,
    aspectRatio,
}: CarouselPros) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div className='carousel-container flex flex-col gap-2 w-full mx-auto'>
            {label && (
                <h2 className='font-barlow-semi-condensed text-primary-normal font-black uppercase italic text-[2em]/[1.5em]'>{label}</h2>
            )}
            <Swiper
                modules={[Navigation]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerGroup}
                navigation={hasNavigation}
                loop={hasLoop}
                className='w-full'
            >
                {slides?.map((item, idx) => (
                    <SwiperSlide
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`carousel-slide ${activeIndex === idx ? 'active' : ''}`}
                    >
                        <div
                            className={mergeClass(
                                'relative w-full overflow-hidden rounded-2xl',
                                aspectRatio ? `aspect-${aspectRatio}` : 'aspect-[3/2]',
                            )}
                        >
                            <Image
                                src={item.image}
                                alt={`NFT ${idx}`}
                                fill
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
