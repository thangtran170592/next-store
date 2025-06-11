import neonSql from '@/lib/database';
import { NextResponseIteratorFn, NextResponseObjectFn } from '@/types/base-response';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: { params: { type: string } }) {
    const { type } = await context.params;
    console.log('GET request for customers with type:', type);
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');
    const id = searchParams.get('id') || '';
    switch (type) {
        case 'current':
            return getCustomerCurrent(id);
        case 'getById':
            return getCustomer(id);
        default:
            return getCustomers(limit, page);
    }
}

async function getCustomerCurrent(id: string) {
    const [data] = await neonSql`SELECT * FROM customers WHERE id = '${id}'`;
    return NextResponseObjectFn({
        data,
    });
}

async function getCustomer(id: string) {
    const [data] = await neonSql`SELECT * FROM customers WHERE id = '${id}'`;
    return NextResponseObjectFn({
        data,
    });
}

async function getCustomers(limit: number, page: number) {
    const offset = (page - 1) * limit;
    const [data, total] = await Promise.all([neonSql`SELECT * FROM customers LIMIT ${limit} OFFSET ${offset}`, neonSql`SELECT COUNT(*) FROM customers`]);
    console.log('getCustomers', { data, total, limit, page });
    return NextResponseIteratorFn({
        data,
        pagination: {
            total: parseInt(total[0].count || '0', 10),
            page,
            limit,
            totalPages: Math.ceil(total[0].count / limit),
        },
    });
}
