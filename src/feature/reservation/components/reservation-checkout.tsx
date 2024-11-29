'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { DateRangePicker } from '~/components/date-range-picker';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
export function ReservationCheckout() {
  const router = useRouter();

  return (
    <div className="border rounded-2xl p-6 space-y-4 w-full bg-slate-50 ">
      <div className="space-x-2">
        <span className="text-lg font-semibold">50$</span>
        <span className="text-sm from-neutral-400">per night</span>
      </div>
      <div className="flex flex-col gap-4">
        <DateRangePicker className="  bg-white" />
        <Input placeholder="Guests" />

        <Button onClick={() => router.push('/checkout')}>Checkout</Button>
        <Button onClick={() => router.push('3/partnership')} variant="secondary">
          Become a parner
        </Button>
      </div>
    </div>
  );
}
