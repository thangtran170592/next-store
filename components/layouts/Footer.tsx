'use client';
import Link from 'next/link';
import Image from 'next/image';
import InstallApp from '@/public/install-app.png';

export default function Footer() {
    return (
        <footer className='px-5 py-10 border-t border-t-neutral-subdued'>
            <div className='max-w-[1128px] font-barlow-semi-condensed mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
                {/* ABOUT US */}
                <div>
                    <h3 className='font-black uppercase italic mb-3 text-lg text-neutral-invert-normal'>About Us</h3>
                    <ul className='flex flex-col gap-2 md:text-sm text-xs text-neutral-accent-light'>
                        <li>
                            <Link href='/careers'>Careers</Link>
                        </li>
                        <li>
                            <Link href='/company-details'>Company Details</Link>
                        </li>
                        <li>
                            <Link href='/terms'>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href='/help'>Help Center</Link>
                        </li>
                        <li>
                            <Link href='/privacy'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href='/affiliate'>Affiliate</Link>
                        </li>
                    </ul>
                </div>

                {/* PRODUCTS */}
                <div>
                    <h3 className='font-bold uppercase italic mb-3 text-lg text-neutral-invert-normal'>Products</h3>
                    <ul className='flex flex-col gap-2 md:text-sm text-xs text-neutral-accent-light'>
                        <li>
                            <Link href='/marketplace'>NFT Marketplace</Link>
                        </li>
                        <li>
                            <Link href='/slingshot'>Slingshot</Link>
                        </li>
                        <li>
                            <Link href='/swaps'>Swaps</Link>
                        </li>
                        <li>
                            <Link href='/launchpad'>NFT Launchpad</Link>
                        </li>
                        <li>
                            <Link href='/runes'>Runes Platform</Link>
                        </li>
                        <li>
                            <Link href='/dashboard'>Creator Dashboard</Link>
                        </li>
                    </ul>
                </div>

                {/* RESOURCES */}
                <div>
                    <h3 className='font-bold uppercase italic mb-3 text-lg text-neutral-invert-normal'>Resources</h3>
                    <ul className='flex flex-col gap-2 md:text-sm text-xs  text-neutral-accent-light'>
                        <li>
                            <Link href='/support'>Support</Link>
                        </li>
                        <li>
                            <Link href='/api'>API</Link>
                        </li>
                        <li>
                            <Link href='/feature-requests'>Feature Requests</Link>
                        </li>
                        <li>
                            <Link href='/trust-safety'>Trust & Safety</Link>
                        </li>
                        <li>
                            <Link href='/sitemap'>Sitemap</Link>
                        </li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className='font-bold uppercase italic mb-3 text-lg  text-neutral-invert-normal'>Contact Us</h3>
                    <ul className='flex flex-col gap-2 md:text-sm text-xs  text-neutral-accent-light'>
                        <li>
                            <Link href='mailto:support@tech.email'>support@tech.email</Link>
                        </li>
                        <li>
                            <Link href='mailto:affiliate@tech.com'>affiliate@tech.com</Link>
                        </li>
                    </ul>
                    <div className='mt-6'>
                        <Link href='/install-app' className='block hover:opacity-80'>
                            <div className='relative w-[152px] h-11'>
                                <Image
                                    priority
                                    src={InstallApp}
                                    alt='Install app'
                                    fill
                                    sizes='auto'
                                    className='object-cover'
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
