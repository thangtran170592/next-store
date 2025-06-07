import { cn } from '@/lib/utils';

type ButtonProps = {
    label?: string;
    icon?: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const variantClass = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizeClass = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
};

export default function Button({
    label,
    icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    className,
    onClick,
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            className={cn(
                'flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                variantClass[variant],
                sizeClass[size],
                className,
            )}
        >
            {loading && (
                <svg className='animate-spin mr-2 h-4 w-4 text-current' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z' />
                </svg>
            )}
            {icon && iconPosition === 'left' && <span className='mr-2'>{icon}</span>}
            {label && <span>{label}</span>}
            {icon && iconPosition === 'right' && <span className='ml-2'>{icon}</span>}
        </button>
    );
}
