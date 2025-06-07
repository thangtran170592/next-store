import { StatusCodes } from 'http-status-codes';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';

export type BaseResponseType<T> = {
    data: T;
    error: string | null;
    message: string | null;
    success: boolean;
    [key: string]: any; // Allow additional properties
};

export default function NextResponseFn<T>(data: T, headerOptions?: HeadersInit): NextResponse<BaseResponseType<T>> {
    const header: HeadersInit = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'X-Request-ID': randomUUID(),
        ...headerOptions,
    };
    try {
        return NextResponse.json(
            {
                data,
                success: true,
                message: 'Successfully',
                error: null,
                status: StatusCodes.OK,
                timestamp: new Date().toISOString(),
            } as BaseResponseType<T>,
            {
                status: StatusCodes.OK,
                statusText: 'Success',
                headers: header,
            },
        );
    } catch (error: any) {
        const errorCode = typeof error?.code === 'number' ? error.code : StatusCodes.INTERNAL_SERVER_ERROR;
        const status = typeof error?.status === 'number' ? error?.status : errorCode;

        return NextResponse.json(
            {
                data,
                success: false,
                message: error?.message || 'An error occurred',
                error: error,
                status: status,
                timestamp: new Date().toISOString(),
            } as BaseResponseType<T>,
            {
                status: status,
                statusText: 'Error',
                headers: header,
            },
        );
    }
}
