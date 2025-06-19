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

export default function Page() {
    return (
        <main className='flex flex-col overflow-y-auto min-h-[calc(100vh-64px)]'>
            <Slider slides={slides} />
            <div className='w-full bg-neutral-normal'>
                <div className='quick-access flex flex-row justify-between py-[1.5em] px-[1.25em] sm:px-0 max-w-[1128px] mx-auto gap-2'>
                    {quickAccesses &&
                        quickAccesses.map((item, idx) => <IconWithLabel key={idx} label={item.label} icon={item.icon} url={item.url} />)}
                </div>
            </div>
            <div className='flex flex-col gap-20 py-20 max-w-[1128px] w-screen mx-auto px-[1.25em] sm:px-0'>
                <Carousel label='New NFT Collections' slides={nftCollections} slidesPerView={6} hasNavigation={true} hasLoop={true} aspectRatio='[3/5]'/>
                <div className='grid grid-cols-9 gap-6'>
                    <div className='col-span-9 sm:col-span-5'>
                        <Carousel
                            label='NFT Drops Calendar'
                            slides={nftDrops}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            hasNavigation={true}
                            hasLoop={true}
                            aspectRatio='[3/2]'
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
        </main>
    );
}
