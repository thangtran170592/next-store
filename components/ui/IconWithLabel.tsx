import { mergeClass } from '@/lib/utils/mergeClass';
import { QuickAccess } from '@/types/QuickAccess';
import Link from 'next/link';

type IconWithLabelProps = QuickAccess & {
    className?: string;
};

export default function IconWithLabel({ label, subLabel, url, icon: Icon, className }: IconWithLabelProps) {
    return (
        <Link href={url ?? '/'} className={mergeClass('flex flex-col items-center gap-[0.75em] hover:cursor-pointer', className)}>
            {Icon && (
                <span className='relative block'>
                    {subLabel && (
                        <span
                            className='font-neue-haas-grotesk absolute top-0 right-0 text-neutral-invert-normal text-[5px]/[1.5] md:text-[12px]/[1.33] rounded-[2.5px] md:rounded-[4px] py-[1.3px] md:py-[2px] px-[2.5px] md:px-[6px] -mt-[4px] md:-mt-[8px] -mr-[6px] md:-mr-[10px]'
                            style={{ backgroundColor: 'var(--red-normal)' }}
                        >
                            {subLabel}
                        </span>
                    )}
                    <Icon className='md:h-[42px] h-[28px]' />
                </span>
            )}
            <span className='block text-center md:text-sm text-[0.625em]/[1.2] uppercase font-normal text-neutral-invert-normal font-neue-haas-grotesk'>
                {label}
            </span>
        </Link>
    );
}
