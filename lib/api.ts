const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000') + '/api';

export async function fetchApiDataPagination<T>(url?: string, limit?: number, page?: number, options?: RequestInit): Promise<T> {
    try {
        const currentUrl = url ? `/${url}?` : '?';
        const response = await fetch(`${baseUrl}${currentUrl}limit=${limit}&page=${page}`, options);
        return response.json();
    } catch (error) {
        console.error('Fetch API error:', error);
        throw error;
    }
}

export async function fetchApiData<T>(url: string, options?: RequestInit): Promise<T> {
    try {
        const response = await fetch(`${baseUrl}/${url}`, options);
        return response.json();
    } catch (error) {
        console.error('Fetch API error:', error);
        throw error;
    }
}

export async function postApiData<T>(url: string, data: any, options?: RequestInit): Promise<T> {
    try {
        const response = await fetch(`${baseUrl}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
            ...options,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Post API error:', error);
        throw error;
    }
}

export async function putApiData<T>(url: string, data: any, options?: RequestInit): Promise<T> {
    try {
        const response = await fetch(`${baseUrl}/${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
            ...options,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Put API error:', error);
        throw error;
    }
}

export async function deleteApiData<T>(url: string, options?: RequestInit): Promise<T> {
    try {
        const response = await fetch(`${baseUrl}/${url}`, {
            method: 'DELETE',
            ...options,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Delete API error:', error);
        throw error;
    }
}
