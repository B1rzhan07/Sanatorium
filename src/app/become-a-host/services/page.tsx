import React from 'react';
import { PropertyServicesForm } from '~/feature/become-a-host';

export default function Services() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className=" text-center">
        <div className="text-3xl font-semibold">Tell guests what your place has to offer</div>
        <div className="text-xl text-slate-400">
          You can add more amenities after you publish your listing.
        </div>
      </div>
      <div className="flex-1 items-center justify-center">
        <PropertyServicesForm />
      </div>
    </div>
  );
}
