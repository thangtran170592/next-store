import { StatusCodes } from 'http-status-codes';
import { NextResponse } from 'next/server';
import { defaultHeaders, generateETag } from './http';

export interface SuccessResponse<T> {
    data: T; // Dữ liệu chính
    status: number; // HTTP status code
    message: string; // Thông báo
    timestamp?: string; // Thời gian response
}

export interface ErrorResponse {
    data?: [] | null; // Dữ liệu trả về (có thể là mảng rỗng)
    status: number; // HTTP status code
    message: string; // Thông báo lỗi
    details?: any; // Chi tiết lỗi (nếu cần)
    timestamp?: string; // Thời gian response
}

export interface PaginationResponse<T> {
    data: T[]; // Dữ liệu chính
    pagination: Pagination;
    timestamp?: string; // Thời gian response
}

export interface Pagination {
    total: number; // Tổng số lượng dữ liệu
    page: number; // Trang hiện tại
    limit: number; // Số lượng dữ liệu trên mỗi trang
    totalPages?: number;
}

export function NextResponseObjectFn<T>(data: T, headerOptions?: HeadersInit): NextResponse<SuccessResponse<T> | ErrorResponse> {
    const headers: HeadersInit = {
        ...defaultHeaders,
        ETag: generateETag(data),
        ...headerOptions,
    };
    try {
        return NextResponse.json<SuccessResponse<T>>(
            {
                data,
                message: 'Successfully',
                status: StatusCodes.OK,
                timestamp: new Date().toISOString(),
            },
            {
                status: StatusCodes.OK,
                statusText: 'Success',
                headers,
            },
        );
    } catch (error: any) {
        const errorCode = typeof error?.code === 'number' ? error.code : StatusCodes.INTERNAL_SERVER_ERROR;
        const status = typeof error?.status === 'number' ? error?.status : errorCode;

        return NextResponse.json<ErrorResponse>(
            {
                data: null,
                status,
                message: error?.message || 'An error occurred',
                details: error?.details,
                timestamp: new Date().toISOString(),
            },
            {
                status: status,
                statusText: 'Error',
                headers,
            },
        );
    }
}

export function NextResponseIteratorFn<T>(result: PaginationResponse<T>, headerOptions?: HeadersInit): NextResponse<PaginationResponse<T> | ErrorResponse> {
    const headers: HeadersInit = {
        ...defaultHeaders,
        ETag: generateETag(result.data),
        ...headerOptions,
    };
    try {
        return NextResponse.json<PaginationResponse<T>>(result, {
            status: StatusCodes.OK,
            statusText: 'Error',
            headers,
        });
    } catch (error: any) {
        const errorCode = typeof error?.code === 'number' ? error.code : StatusCodes.INTERNAL_SERVER_ERROR;
        const status = typeof error?.status === 'number' ? error?.status : errorCode;

        return NextResponse.json<ErrorResponse>(
            {
                data: [],
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: error?.message || 'An error occurred',
                details: error?.details,
                timestamp: new Date().toISOString(),
            },
            {
                status: status,
                statusText: 'Error',
                headers,
            },
        );
    }
}
