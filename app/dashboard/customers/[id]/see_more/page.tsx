import Form from '@/app/ui/customers/see-more';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchCustomer, fetchInvoiceByCustomerId } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'See more of a Customer',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [customer, invoice] = await Promise.all([
    fetchCustomer(id),
    fetchInvoiceByCustomerId(id)
  ]);

  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'customers', href: '/dashboard/customers' },
          {
            label: 'See more of a Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customers={customer} invoice={invoice}/>
    </main>
  );
}
