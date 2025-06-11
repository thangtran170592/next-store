import { SWRConfiguration } from 'swr';
import useSWR from 'swr';
import { deleteApiData, fetchApiData, fetchApiDataPagination, postApiData, putApiData } from './api';
import { PaginationResponse, SuccessResponse } from '@/types/base-response';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const swrConfig = {
    refreshInterval: 0,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    dedupingInterval: 0, // 1 minute
    errorRetryCount: 3,
    //errorRetryInterval: 5000, // 5 seconds
    //focusThrottleInterval: 0,
    //loadingTimeout: 10000, // 10 seconds
};

export function useSWRFetchApiDataPagination<T>(url: string, limit: number, page: number, apiOptions?: RequestInit, options?: SWRConfiguration): any {
    const swrOptions = {
        ...swrConfig,
        ...options,
    };

    const fetcher = async () => {
        try {
            const response = await fetchApiDataPagination<PaginationResponse<T>>(url, limit, page, apiOptions);
            console.log('useSWRFetchApiDataPagination', response);
            return response;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    };

    return useSWR<PaginationResponse<T>>(url, fetcher, swrOptions);
}

export function useSWRFetchApiData<T>(url: string, apiOptions?: RequestInit, options?: SWRConfiguration): any {
    const swrOptions = {
        ...swrConfig,
        ...options,
    };

    const fetcher = async () => {
        try {
            const response = await fetchApiData<SuccessResponse<T>>(url, apiOptions);
            return response;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    };

    return useSWR<SuccessResponse<T>>(url, fetcher, swrOptions);
}

export function useSWRPostApiData<T>(url: string, data: any, apiOptions?: RequestInit, options?: SWRConfiguration) {
    const swrOptions = {
        ...swrConfig,
        ...options,
    };

    const fetcher = async () => {
        try {
            const response = await postApiData<SuccessResponse<T>>(url, data, apiOptions);
            return response.data;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    };

    const { data: responseData, error, isLoading, mutate } = useSWR<T>([`${baseUrl}/api/${url}`, data], fetcher, swrOptions);

    return {
        data: responseData,
        error,
        isLoading,
        mutate,
    };
}

export function useSWRPutApiData<T>(url: string, data: any, apiOptions?: RequestInit, options?: SWRConfiguration) {
    const swrOptions = {
        ...swrConfig,
        ...options,
    };

    const fetcher = async () => {
        try {
            const response = await putApiData<SuccessResponse<T>>(url, data, apiOptions);
            return response.data;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    };

    const { data: responseData, error, isLoading, mutate } = useSWR<T>([`${baseUrl}/api/${url}`, data], fetcher, swrOptions);

    return {
        data: responseData,
        error,
        isLoading,
        mutate,
    };
}

export function useSWRDeleteApiData<T>(url: string, apiOptions?: RequestInit, options?: SWRConfiguration) {
    const swrOptions = {
        ...swrConfig,
        ...options,
    };

    const fetcher = async () => {
        try {
            const response = await deleteApiData<SuccessResponse<T>>(url, apiOptions);
            return response.data;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    };

    const { data, error, isLoading, mutate } = useSWR<T>(`${baseUrl}/api/${url}`, fetcher, swrOptions);

    return {
        data,
        error,
        isLoading,
        mutate,
    };
}
