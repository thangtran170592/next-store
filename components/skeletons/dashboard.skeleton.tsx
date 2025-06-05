export default function DashboardSkeleton() {
    return (
        <div className='space-y-4 p-4'>
            {/* Header Skeleton */}
            <div className='flex flex-col gap-4'>
                <div className='relative h-8 w-1/2 overflow-hidden rounded-md bg-gray-200'>
                    <div className='absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent' />
                </div>
                <div className='relative h-8 w-1/2 overflow-hidden rounded-md bg-gray-200'>
                    <div className='absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent' />
                </div>
            </div>

            {/* Rest of your skeleton code... */}
        </div>
    );
}
