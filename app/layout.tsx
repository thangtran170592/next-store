import type { Metadata } from 'next';
import { inter } from '@components/shared/font';
import '@styles/globals.scss';

export const metadata: Metadata = {
    title: 'Next Store',
    description: 'Modern e-commerce store built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
