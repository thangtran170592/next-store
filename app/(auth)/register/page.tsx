'use client';
import InputField from '@/components/ui/inputText';
import { registerSchema, RegisterPayload } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const { control, handleSubmit: handleSubmitForm } = useForm<RegisterPayload>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterPayload) => {
        console.log('Data:', data);
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            router.push('/sign-in');
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='flex min-h-screen flex-col p-6'>
            <h1 className='text-4xl font-bold'>Register</h1>
            <form onSubmit={handleSubmitForm(onSubmit)}>
                <InputField
                    id='firstName'
                    label='First Name'
                    name='firstName'
                    type='text'
                    placeholder='Enter your first name'
                    control={control}
                />
                <InputField
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    type='text'
                    placeholder='Enter your last name'
                    control={control}
                />
                <InputField id='email' label='Email' name='email' type='email' placeholder='Enter your email' control={control} />
                <InputField
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    control={control}
                />
                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </main>
    );
}
