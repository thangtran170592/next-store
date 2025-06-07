import neonSql from '@/lib/database';
import NextResponseFn from '@/types/base-response';

export async function GET() {
    try {
        console.log('Fetching customers from the database...');
        const users = await neonSql`
            SELECT 
                id,
                customer_id,
                name,
                email,
                image_url,
                date,
                amount,
                status
            FROM customers 
            ORDER BY id DESC 
            LIMIT 10
        `;
        console.log('Customers:', users);
        return NextResponseFn(users);
    } catch (error) {
        console.error('Error fetching customers:', error);
        return NextResponseFn(error);
    }
}

//   async getCustomerById(id: string) {
//     const { rows } = await sql`SELECT * FROM customers WHERE id = ${id}`;
//     return rows[0];
//   },

//   async createCustomer(customer: { name: string; email: string }) {
//     const { rows } = await sql`
//       INSERT INTO customers (name, email)
//       VALUES (${customer.name}, ${customer.email})
//       RETURNING *;
//     `;
//     return rows[0];
//   },

//   async updateCustomer(id: string, customer: { name?: string; email?: string }) {
//     const { rows } = await sql`
//       UPDATE customers
//       SET
//         name = COALESCE(${customer.name}, name),
//         email = COALESCE(${customer.email}, email)
//       WHERE id = ${id}
//       RETURNING *;
//     `;
//     return rows[0];
//   },

//   async deleteCustomer(id: string) {
//     const { rowCount } = await sql`DELETE FROM customers WHERE id = ${id}`;
//     return rowCount > 0;
//   },
// };
