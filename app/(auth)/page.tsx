'use client';
import { loginSchema, LoginPayload } from '@/schemas';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import InputText from '@/components/ui/inputText';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import Button from '@components/ui/button';

export default function SignInPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const { control, handleSubmit: handleSubmitForm } = useForm<LoginPayload>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginPayload) => {
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            router.push('/dashboard');
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='flex min-h-screen flex-col p-6'>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <Image
                        alt='Your Company'
                        width={40}
                        height={40}
                        priority
                        src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                        className='mx-auto h-10 w-auto'
                    />
                    <h2 className='mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
                        Sign in to your account
                    </h2>
                </div>

                <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <div className='p-6 rounded-md border bg-white'>
                        <form onSubmit={handleSubmitForm(onSubmit)} className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <InputText
                                    id='email'
                                    name='email'
                                    label='Email'
                                    type='email'
                                    placeholder='Enter your email address'
                                    loading={isSubmitting}
                                    control={control}
                                    icon={<Mail className='w-4 h-4 text-gray-500' />}
                                />
                                <InputText
                                    id='password'
                                    name='password'
                                    label='Password'
                                    type='password'
                                    placeholder='Enter your password'
                                    loading={isSubmitting}
                                    control={control}
                                    icon={<Lock className='w-4 h-4 text-gray-500' />}
                                />
                            </div>
                            <Button
                                type='submit'
                                label={isSubmitting ? 'Signing in...' : 'Sign in'}
                                icon={<Lock className='w-4 h-4' />}
                                iconPosition='left'
                                loading={isSubmitting}
                                variant='primary'
                                size='medium'
                                disabled={isSubmitting || !isEmpty(control._formState.errors)}
                            />
                        </form>
                        <p className='mt-6 text-center text-sm/6 text-gray-500'>
                            Not a member?{' '}
                            <Link
                                prefetch
                                href='/register'
                                className='font-semibold text-indigo-600 hover:text-indigo-500'
                            >
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
