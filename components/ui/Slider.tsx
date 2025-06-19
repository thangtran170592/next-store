'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from '@/types/Slide';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import { mergeClass } from '@/lib/utils/mergeClass';

type SliderPros = {
    slides: Slide[];
    spaceBetween?: number;
    slidesPerView?: number;
    slidesPerGroup?: number;
    isNavigation?: boolean;
    isLoop?: boolean;
    autoplay?: boolean | AutoplayOptions;
    className?: string;
};

export default function Slider({
    slides,
    isNavigation = true,
    isLoop = true,
    autoplay = false,
    slidesPerView = 1,
    slidesPerGroup = 1,
    className,
}: SliderPros) {
    return (
        <div className='slide-container w-full mx-auto'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                navigation={isNavigation}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerGroup}
                autoplay={
                    autoplay
                        ? {
                              delay: 3000,
                              disableOnInteraction: false,
                          }
                        : false
                }
                loop={isLoop}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                className='w-full'
            >
                {slides?.map((item, idx) => (
                    <SwiperSlide key={idx} className='carousel-slide'>
                        <div className={mergeClass('relative w-full', className && `${className}`)}>
                            <Image
                                src={item.image}
                                alt={`NFT ${item.title}`}
                                fill
                                priority={idx === 0}
                                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw'
                                className='object-cover'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
