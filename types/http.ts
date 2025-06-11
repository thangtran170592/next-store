import { randomUUID } from 'crypto';

export interface HeadersInit {
    'Content-Type'?: string;
    'Cache-Control'?: string;
    ETag?: string;
    'X-Request-ID'?: string;
    'Access-Control-Allow-Origin'?: string;
    'Access-Control-Allow-Methods'?: string;
    'Access-Control-Allow-Headers'?: string;
    'Access-Control-Allow-Credentials'?: string;
    [key: string]: string | undefined;
}

export const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    //'Cache-Control': 'public, max-age=3600', // 1 hour
    'Cache-Control': 'no-cache, no-store, must-revalidate', // Disable caching
    ETag: '', // Will be set dynamically
    'X-Request-ID': randomUUID(),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    'Access-Control-Allow-Credentials': 'true',
};

export function generateETag(data: any): string {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return `"${hash.toString(16)}"`;
}
