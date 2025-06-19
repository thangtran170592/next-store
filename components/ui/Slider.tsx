'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from '@/types/Slide';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Slider({ slides }: { slides: Slide[] }) {
    return (
        <div className='slide-container w-full mx-auto'>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                slidesPerGroup={1}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                loop
                className='w-auto h-[450px]'
            >
                {slides?.map((item, idx) => (
                    <SwiperSlide key={idx} className='carousel-slide'>
                        <Image
                            priority
                            src={item.image}
                            alt={`NFT ${idx}`}
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw'
                            className='object-cover'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
