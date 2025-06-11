import { NextResponseObjectFn } from '@/types/base-response';
import { NextRequest } from 'next/server';

export async function DELETE(request: NextRequest, { params }: { params: { type: string } }) {
    const { type } = params;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    switch (type) {
        case 'delete':
        //return deleteCustomer(id);
        case 'bulk-delete':
        //return deleteBulkCustomers(await request.json());
        default:
            return NextResponseObjectFn({ error: 'Invalid type parameter' });
    }
}
