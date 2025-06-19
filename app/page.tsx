'use client';

import Carousel from '@/components/ui/Carousel';
import Slider from '@/components/ui/Slider';
import IconWithLabel from '@/components/ui/IconWithLabel';
import { slides } from '@/lib/constants/slides';
import { nftCollections } from '@/lib/constants/nftCollections';
import { nftDrops } from '@/lib/constants/nftDrops';
import { quickAccesses } from '@/lib/constants/quick-access';
import nftHot from '@/public/nft-drops/nft-hot.png';
import nftPromotion from '@/public/nft-drops/nft-promotion.png';

import ImageWithLabel from '@/components/ui/ImageWithLabel';
import JsonLd from '@/components/shared/JsonLd';

export default function Page() {
    return (
        <main className='flex flex-col overflow-y-auto min-h-[calc(100vh-64px)]'>
            <Slider slides={slides} autoplay={true} className='h-[450px] sm:h-[450px] md:h-[450px] lg:h-[450px]' />
            <div className='w-full bg-neutral-normal'>
                <div className='quick-access flex flex-row justify-between py-[1.5em] px-[1.25em] sm:px-0 max-w-[1128px] mx-auto gap-2'>
                    {quickAccesses &&
                        quickAccesses.map((item, idx) => <IconWithLabel key={idx} label={item.label} icon={item.icon} url={item.url} />)}
                </div>
            </div>
            <div className='flex flex-col gap-20 py-20 max-w-[1128px] w-screen mx-auto px-[1.25em] sm:px-0'>
                <Carousel
                    label='New NFT Collections'
                    slides={nftCollections}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                        480: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 5,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                        1280: {
                            slidesPerView: 6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                    }}
                    className='h-[180px] sm:h-[200px] md:h-[225px] lg:h-[245px] rounded-2xl'
                />
                <div className='grid grid-cols-9 gap-6'>
                    <div className='col-span-9 sm:col-span-5'>
                        <Carousel
                            label='NFT Drops Calendar'
                            slides={nftDrops}
                            className='h-[245px] sm:h-[245px] md:h-[245px] lg:h-[245px] rounded-2xl'
                        />
                    </div>
                    <div className='col-span-9 sm:col-span-4'>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='col-span-1'>
                                <ImageWithLabel image={nftHot} alt='NFT Hot' label='Hot NFT' />
                            </div>
                            <div className='col-span-1'>
                                <ImageWithLabel image={nftPromotion} alt='Promotion' label='Promotion' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <JsonLd
                data={{
                    '@context': 'https://next-store-bice-kappa.vercel.app',
                    '@type': 'BlogPosting',
                    headline: 'NFT là gì?',
                    image: 'https://nft.vn/nft-cover.jpg',
                    author: { '@type': 'Person', name: 'Thắng Trần' },
                    datePublished: '2025-05-19',
                }}
            />
        </main>
    );
}
