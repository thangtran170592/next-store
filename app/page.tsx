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
            <Slider slides={slides} isNavigation={false} autoplay={true} className='h-[180px] sm:h-[245px] md:h-[345px] lg:h-[450px]' />
            <div className='w-full bg-neutral-normal'>
                <div className='quick-access flex flex-row justify-between py-[1em] md:py-[1.5em] px-[1.25em] md:px-0 max-w-[1128px] mx-auto gap-2'>
                    {quickAccesses &&
                        quickAccesses.map((item, idx) => (
                            <IconWithLabel key={idx} label={item.label} subLabel={item.subLabel} icon={item.icon} url={item.url} />
                        ))}
                </div>
            </div>
            <div className='flex flex-col gap-10 md:gap-20 py-10 md:py-20 px-5 md:px-0 max-w-[1128px] w-screen mx-auto'>
                <Carousel
                    label='New NFT Collections'
                    slides={nftCollections}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 8,
                        },
                        480: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 8,
                        },
                        640: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                            spaceBetween: 8,
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
                    className='h-[140px] md:h-[245px] lg:h-[245px] rounded-2xl'
                />
                <div className='grid grid-cols-9 gap-6'>
                    <div className='col-span-9 md:col-span-5'>
                        <Carousel
                            label='NFT Drops Calendar'
                            slides={nftDrops}
                            className='h-[170px] md:h-[240px] lg:h-[240px] rounded-2xl'
                        />
                    </div>
                    <div className='col-span-9 md:col-span-4'>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='col-span-1'>
                                <ImageWithLabel
                                    image={nftHot}
                                    alt='NFT Hot'
                                    label='Hot NFT'
                                    className='h-[170px] md:h-[240px] lg:h-[240px] rounded-2xl'
                                />
                            </div>
                            <div className='col-span-1'>
                                <ImageWithLabel
                                    image={nftPromotion}
                                    alt='Promotion'
                                    label='Promotion'
                                    className='h-[170px] md:h-[240px] lg:h-[240px] rounded-2xl'
                                />
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
