import '@styles/globals.scss';
import type { Metadata } from 'next';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export const metadata: Metadata = {
    title: 'Trang chủ - NFT',
    icons: {
        icon: '/mobile-logo.svg',
        shortcut: '/mobile-logo.svg',
        apple: '/mobile-logo.svg',
    },
    description: 'Tech là nền tảng NFT tốt nhất cho người mới bắt đầu.',
    openGraph: {
        title: 'Trang chủ Tech',
        description: 'NFT, thị trường giao dịch, bộ sưu tập.',
        url: 'https://nft.vn',
        siteName: 'nft NFT',
        images: [
            {
                url: 'https://nft.vn/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'vi_VN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'nft NFT',
        description: 'NFT dành cho tất cả mọi người',
        images: ['https://nft.vn/og-image.png'],
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
