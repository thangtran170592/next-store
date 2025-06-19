import { mergeClass } from '@/lib/utils/mergeClass';
import { QuickAccess } from '@/types/QuickAccess';
import Link from 'next/link';

type IconWithLabelProps = QuickAccess & {
    className?: string;
};

export default function IconWithLabel({ label, url, icon: Icon, className }: IconWithLabelProps) {
    return (
        <Link href={url ?? '/'} className='flex flex-col items-center gap-[0.75em] hover:cursor-pointer'>
            {Icon && (
                <span className={mergeClass(className, 'block')}>
                    <Icon />
                </span>
            )}
            <span className='block text-center text-sm uppercase font-normal text-neutral-invert-normal font-neue-haas-grotesk'>{label}</span>
        </Link>
    );
}
