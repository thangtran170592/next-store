import { SWRConfiguration } from 'swr';
import useSWR from 'swr';
import { deleteApiData, fetchApiData, postApiData, putApiData } from './api';
import { BaseResponseType } from '@/types/base-response';

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

export function useSWRFetchApiData<T>(url: string, apiOptions?: RequestInit, options?: SWRConfiguration): any {
    const swrOptions = {
        ...swrConfig,
        ...options,
    };

    const fetcher = async () => {
        try {
            const response = await fetchApiData<BaseResponseType<T>>(url, apiOptions);
            if (!response.success) {
                throw new Error(response.error || 'Failed to fetch data');
            }
            console.log('Response:', response);
            return response;
        } catch (error) {
            console.error('Fetcher error:', error);
            throw error;
        }
    };

    const response = useSWR<BaseResponseType<T>>(url, fetcher, swrOptions);

    return response;
}

export function useSWRPostApiData<T>(url: string, data: any, apiOptions?: RequestInit, options?: SWRConfiguration) {
    const swrOptions = {
        ...swrConfig,
        ...options,
    };

    const fetcher = async () => {
        try {
            const response = await postApiData<BaseResponseType<T>>(url, data, apiOptions);
            if (!response.success) {
                throw new Error(response.error || 'Failed to post data');
            }
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
            const response = await putApiData<BaseResponseType<T>>(url, data, apiOptions);
            if (!response.success) {
                throw new Error(response.error || 'Failed to update data');
            }
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
            const response = await deleteApiData<BaseResponseType<T>>(url, apiOptions);
            if (!response.success) {
                throw new Error(response.error || 'Failed to delete data');
            }
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
