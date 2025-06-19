import '@styles/globals.scss';
import type { Metadata } from 'next';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: {
        default: 'Your Store Name',
        template: '%s | Your Store Name',
    },
    description: 'Your one-stop shop for all your needs. Browse our wide selection of products and services.',
    keywords: ['store', 'shopping', 'e-commerce', 'online store', 'retail'],
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    publisher: 'Your Company Name',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'http://localhost:3000',
        siteName: 'Your Store Name',
        title: 'Your Store Name',
        description: 'Your one-stop shop for all your needs. Browse our wide selection of products and services.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Your Store Name',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Your Store Name',
        description: 'Your one-stop shop for all your needs. Browse our wide selection of products and services.',
        images: ['/twitter-image.jpg'],
        creator: 'Thang',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [{ url: '/icon-x-16.png', sizes: '16x16', type: 'image/png' }],
        shortcut: '/icon-x-16.png',
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className='bg-neutral-accent font-barlow-semi-condensed text-base overflow-x-hidden max-w-[100em] m-auto w-screen'>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
