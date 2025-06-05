import { Control } from 'react-hook-form';

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    isSubmitting: boolean;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    label?: string;
    submittingLabel?: string;
    className?: string;
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    onClick?: () => void;
    control: Control<any>;
};

export default function Button({
    type,
    disabled,
    label,
    submittingLabel,
    isSubmitting,
    className,
    props,
    onClick,
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
            {isSubmitting ? submittingLabel : label}
        </button>
    );
}
