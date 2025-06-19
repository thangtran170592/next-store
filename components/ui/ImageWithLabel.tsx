import { mergeClass } from '@/lib/utils/mergeClass';
import Image, { StaticImageData } from 'next/image';

type ImageWithLabelProps = {
    image: StaticImageData | string;
    alt: string;
    label: string;
    url?: string;
    className?: string;
};

export default function ImageWithLabel({ image, alt, label, url, className }: ImageWithLabelProps) {
    return (
        <div
            className={mergeClass('flex flex-col gap-2', url && 'cursor-pointer hover:opacity-80')}
            onClick={() => url && window.open(url, '_blank')}
        >
            {label && (
                <h2 className='font-barlow-semi-condensed text-primary-normal font-black uppercase italic text-[1.5em]/[1.5] md:text-[2em]/[1.5]'>
                    {label}
                </h2>
            )}
            <div className={mergeClass('relative w-full', className && `${className}`)}>
                <Image
                    priority
                    src={image}
                    alt={alt}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw'
                    className='object-cover rounded-xl'
                />
            </div>
        </div>
    );
}
