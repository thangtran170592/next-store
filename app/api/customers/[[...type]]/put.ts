import { NextResponseObjectFn } from '@/types/base-response';
import { NextRequest } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: { type: string } }) {
    const { type } = params;
    const body = await request.json();

    switch (type) {
        case 'create':
        //return createCustomer(body);
        case 'bulk-create':
        //return createBulkCustomers(body);
        default:
            return NextResponseObjectFn({ error: 'Invalid type parameter' });
    }
}
