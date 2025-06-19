import { mergeClass } from '@/lib/utils/mergeClass';
import { Button } from '@headlessui/react';
import LoadingIcon from '@/public/icons/loading.svg';

type BaseButtonProps = {
    label?: string;
    icon?: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'normal' | 'large';
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const variantClass = {
    primary: 'bg-primary-normal text-neutral-invert-accent hover:bg-primary-accent',
    secondary: 'border bg-transparent text-neutral-accent-light hover:bg-primary-subdued',
};

const sizeClass = {
    small: 'px-[1.75em] py-[0.25em] text-sm',
    normal: 'px-[2em] py-[0.5em] text-base',
    large: 'px-[2.25em] py-[0.75em] text-lg',
};

export default function BaseButton({
    label,
    icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    type = 'button',
    variant = 'primary',
    size = 'normal',
    className,
    onClick,
}: BaseButtonProps) {
    return (
        <Button
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            className={mergeClass(
                'flex justify-center items-center gap-[0.5em] relative',
                variantClass[variant],
                sizeClass[size],
                (disabled || loading) && 'opacity-40 cursor-not-allowed',
                className,
            )}
        >
            {loading && (
                <LoadingIcon
                    className={mergeClass(
                        'animate-spin-slow absolute left-2 top-[25%]',
                        variant === 'secondary' && 'text-neutral-accent-light',
                    )}
                    width={18}
                    height={18}
                />
            )}
            {icon && iconPosition === 'left' && <>{icon}</>}
            {label && <>{label}</>}
            {icon && iconPosition === 'right' && <>{icon}</>}
        </Button>
    );
}
