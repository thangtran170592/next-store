import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type IconProps = {
    icon: LucideIcon;
    className?: string;
};

export default function Icon({ icon: Icon, className = '' }: IconProps) {
    return <Icon className={cn('w-5 h-5', className)} />;
}
