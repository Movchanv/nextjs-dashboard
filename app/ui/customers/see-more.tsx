'use client';

import { CustomerForm, InvoiceForm } from '@/app/lib/definitions';
import {
  UserCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import InvoiceStatus from "@/app/ui/invoices/status"

export default function SeeMoreOfaCustomer({
  customers,
  invoice,
}: {
  customers: CustomerForm[];
  invoice: InvoiceForm[];
}) {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Customer's name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="input"
              readOnly
              defaultValue={customers[0]?.name}
              placeholder="Enter a name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="name-error"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        {/* Customer's Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Customer's email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={customers[0]?.email}
                readOnly
                placeholder="Enter an email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Customer Avatar */}
        <div className="mb-4">
          <label htmlFor="avatar" className="mb-2 block text-sm font-medium">
            Customer's avatar path
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="avatar"
                name="avatar"
                type="input"
                readOnly
                defaultValue={customers[0]?.image_url}
                placeholder="Enter avatar's URL"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="avatar-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="mt-6">
          <h3 className="text-lg font-medium">Invoices</h3>
          <table className="min-w-full mt-4 bg-white shadow-md rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 text-sm font-medium text-gray-600">Amount</th>
                <th className="text-left p-3 text-sm font-medium text-gray-600">Invoice ID</th>
                <th className="text-left p-3 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoice.map((inv) => (
                <tr key={inv.id} className="border-t">
                  <td className="p-3 text-sm text-gray-700">
                    <CurrencyDollarIcon className="inline-block h-5 w-5 mr-2 text-gray-400" />
                    ${inv.amount}
                  </td>
                  <td className="p-3 text-sm text-gray-700">{inv.id}</td>
                  <td className="p-3 text-sm text-gray-700">
                  <InvoiceStatus status={inv.status} />
                    {/* {inv.status === 'paid' ? (
                      <CheckIcon className="inline-block h-5 w-5 text-green-500" />
                    ) : (
                      <ClockIcon className="inline-block h-5 w-5 text-yellow-500" />
                    )}
                    {inv.status} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Go back
        </Link>
      </div>
    </form>
  );
}
