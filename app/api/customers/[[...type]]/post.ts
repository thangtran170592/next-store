import neonSql from '@/lib/database';
import { NextResponseObjectFn } from '@/types/base-response';
import { Customer } from '@/types/customer';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { type: string } }) {
    const { type } = params;
    const body = await request.json();

    switch (type) {
        case 'create':
            return createCustomer(body);
        case 'bulk-create':
            return createBulkCustomers(body);
        default:
            return NextResponseObjectFn({ error: 'Invalid type parameter' });
    }
}

async function createCustomer(data: Customer) {
    const { name, email, image_url } = data;
    const result = await neonSql`
            INSERT INTO customers (name, email, image_url)
            VALUES (${name}, ${email}, ${image_url})
            RETURNING *
        `;
    return NextResponseObjectFn(result[0]);
}

async function createBulkCustomers(data: any[]) {
    const result = await neonSql`
            INSERT INTO customers (name, email, image_url)
            SELECT * FROM json_populate_recordset(null::customers, ${JSON.stringify(data)})
            RETURNING *
        `;
    return NextResponseObjectFn(result);
}
