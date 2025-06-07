'use client';

import { useSWRFetchApiData } from '@/lib/useSWR';
import { Customer } from '@/types/customer';
import Icon from '@components/ui/icon';
import { Home } from 'lucide-react';

export default function Page() {
    const { data, error, isLoading } = useSWRFetchApiData<Customer[]>('customers');
    console.log('Data:', data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <main className='flex min-h-screen flex-col p-6'>
            <h1 className='text-4xl font-bold'>Dashboard</h1>
            <Icon icon={Home} />
            {data && (
                <div className='mt-4'>
                    <h2 className='text-2xl font-semibold mb-4'>Customers</h2>
                    <div className='grid gap-4'>
                        {data.map((customer: Customer) => (
                            <div key={customer.id} className='p-4 border rounded-lg'>
                                <p className='font-medium'>{customer.name}</p>
                                <p className='text-gray-600'>{customer.email}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
