import Icon from '@components/ui/icon';
import { Home } from 'lucide-react';

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return (
        <main className='flex min-h-screen flex-col p-6'>
            <h1 className='text-4xl font-bold'>Dashboard</h1>
            <Icon icon={Home} />
        </main>
    );
}
