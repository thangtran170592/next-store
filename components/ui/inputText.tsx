import { Control, useController } from 'react-hook-form';
import { cn } from '@/lib/utils';

type InputFieldProps = {
    id: string;
    name: string;
    label?: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    variant?: 'filled' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    required?: boolean;
    control: Control<any>;
};

export default function InputText({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    className,
    icon,
    iconPosition = 'left',
    disabled = false,
    variant = 'outlined',
    required = false,
    control,
    size = 'medium',
}: InputFieldProps) {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
    });
    const variantClass = {
        filled: {
            base: 'bg-gray-50 border-transparent',
            hover: 'hover:bg-gray-100',
            focus: 'focus:bg-white focus:border-blue-600',
            error: 'focus:border-red-500',
        },
        outlined: {
            base: 'bg-white border border-gray-300',
            hover: 'hover:bg-gray-100',
            focus: 'focus:bg-white focus:border-blue-600',
            error: 'focus:border-red-500',
        },
    };
    return (
        <div className='flex flex-col w-full gap-2'>
            {label && (
                <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
                    <span>{label}</span>
                    {required && <span className='text-red-500 ml-1 align-super text-xs'>*</span>}
                </label>
            )}
            <div className='relative'>
                {icon && iconPosition === 'left' && (
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3'>{icon}</div>
                )}
                {icon && iconPosition === 'right' && (
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3'>{icon}</div>
                )}
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    ref={ref}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={cn(
                        'block w-full rounded-md px-3 py-2 text-sm',
                        'transition-all duration-200',
                        'placeholder:text-gray-400',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
                        'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
                        icon && iconPosition === 'left' && 'pl-10',
                        icon && iconPosition === 'right' && 'pr-10',
                        variantClass[variant].base,
                        variantClass[variant].hover,
                        variantClass[variant].focus,
                        error ? variantClass[variant].error : '',
                        size === 'small' && 'text-sm py-1',
                        size === 'medium' && 'text-base py-2',
                        size === 'large' && 'text-lg py-3',
                        className,
                    )}
                />
            </div>
            {error && <p className='text-red-500 text-xs'>{error.message}</p>}
        </div>
    );
}
