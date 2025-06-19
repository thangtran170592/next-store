'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Link from 'next/link';
import Logo from '@/public/logo.svg';
import MobileLogo from '@/public/mobile-logo.svg';
import MenuIcon from '@/public/icons/menu.svg';
import CloseIcon from '@/public/icons/close.svg';
import { Menu } from '@/types';
import CustomButton from './BaseButton';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { mergeClass } from '@/lib/utils/mergeClass';

export default function NavBar({ menus }: { menus: Menu[] }) {
    const [isLoadingSignUp, setIsLoadingSignUp] = useState<boolean>(false);
    const [isLoadingLogin, setIsLoadingLogIn] = useState<boolean>(false);
    const pathname = usePathname();

    const onClickSignUpHandler = () => {
        setIsLoadingSignUp(true);
        setTimeout(() => {
            setIsLoadingSignUp(false);
        }, 2000); // Simulate loading for 2 seconds
    };
    const onClickLogInHandler = () => {
        setIsLoadingLogIn(true);
        setTimeout(() => {
            setIsLoadingLogIn(false);
        }, 2000); // Simulate loading for 2 seconds
    };
    return (
        <Disclosure as='nav' className='relative'>
            {({ open }) => (
                <>
                    <div className='md:px-[2.5em] md:py-[1.25em] px-[1.25em] py-[0.75em]'>
                        <div className='w-full flex flex-row items-center justify-between gap-[1em]'>
                            <div className='flex items-center justify-start gap-[1.5em]'>
                                <div className='flex items-center justify-between gap-[1em]'>
                                    {/* Menu button (for mobile) */}
                                    <div className='flex md:hidden'>
                                        <DisclosureButton aria-label='Mobile menu' className='inline-flex items-center justify-center'>
                                            {open ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
                                        </DisclosureButton>
                                    </div>
                                    <Link href='/' className='flex items-center'>
                                        <Logo width={72} height={39} className='hidden md:block' />
                                        <MobileLogo width={71} height={36} className='block md:hidden' />
                                    </Link>
                                </div>

                                {/* Menu (desktop) */}
                                <div className='hidden md:flex md:flex-row md:items-center'>
                                    {menus.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={item.url}
                                            className={mergeClass(
                                                'block uppercase text-neutral-accent-light text-sm py-[0.5em] px-[1.125em] font-medium font-neue-haas-grotesk rounded-[6.25em] hover:bg-neutral-subdued hover:text-primary-normal',
                                                pathname.startsWith(item.url) && 'text-primary-normal bg-neutral-subdued',
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-[0.5em]'>
                                <CustomButton
                                    type='button'
                                    label='Sign up'
                                    variant='primary'
                                    loading={isLoadingSignUp}
                                    className='uppercase rounded-[6.25em] italic font-black'
                                    onClick={() => onClickSignUpHandler()}
                                />
                                <CustomButton
                                    type='button'
                                    label='Log in'
                                    variant='secondary'
                                    loading={isLoadingLogin}
                                    className='uppercase rounded-[6.25em] italic font-black'
                                    onClick={() => onClickLogInHandler()}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Menu (mobile) */}
                    <DisclosurePanel className='md:hidden absolute z-10 w-full bg-neutral-normal flex flex-col items-center gap-[1em] p-[1.25em] h-[calc(100vh-3.75em)] overflow-auto'>
                        {menus.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.url}
                                className={mergeClass(
                                    'block w-full uppercase text-center py-[0.875em] text-neutral-accent-light text-sm font-medium font-neue-haas-grotesk rounded-[6.25em] hover:bg-neutral-subdued hover:text-primary-normal',
                                    pathname.startsWith(item.url) && 'text-primary-normal bg-neutral-subdued',
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
