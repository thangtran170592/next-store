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

export default function NavBar({ menus }: { menus: Menu[] }) {
    const [isLoadingSignUp, setIsLoadingSignUp] = useState<boolean>(false);
    const [isLoadingLogin, setIsLoadingLogIn] = useState<boolean>(false);
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
                    <div className='sm:px-[2.5em] sm:py-[1.25em] px-[1.25em] py-[0.75em]'>
                        <div className='w-full flex flex-row items-center justify-between gap-[1em]'>
                            <div className='flex items-center justify-start gap-[1.5em]'>
                                <div className='flex items-center justify-between gap-[1em]'>
                                    {/* Menu button (for mobile) */}
                                    <div className='flex sm:hidden'>
                                        <DisclosureButton aria-label='Mobile menu' className='inline-flex items-center justify-center'>
                                            {open ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
                                        </DisclosureButton>
                                    </div>
                                    <Link href='/' className='flex items-center'>
                                        <Logo width={72} height={39} className='hidden sm:block' />
                                        <MobileLogo width={71} height={36} className='block sm:hidden' />
                                    </Link>
                                </div>

                                {/* Menu (desktop) */}
                                <div className='hidden sm:flex sm:flex-row sm:items-center'>
                                    {menus.map((item) => (
                                        <Link
                                            key={item.url}
                                            href={item.url}
                                            className='block uppercase text-neutral-accent-light text-sm py-[0.5em] px-[1.125em] font-medium font-neue-haas-grotesk rounded-[6.25em] hover:bg-neutral-subdued hover:text-primary-normal'
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
                    <DisclosurePanel className='sm:hidden absolute z-10 w-full bg-neutral-normal flex flex-col items-center gap-[1em] p-[1.25em] h-[calc(100vh-3.75em)] overflow-auto'>
                        {menus.map((item) => (
                            <Link
                                key={item.url}
                                href={item.url}
                                className='block w-full uppercase text-center py-[0.875em] text-neutral-accent-light text-sm font-medium font-neue-haas-grotesk rounded-[6.25em] hover:bg-neutral-subdued hover:text-primary-normal'
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
