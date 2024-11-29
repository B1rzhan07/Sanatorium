import React from 'react';
import { PropertyServicesIcons } from '~/components/facilitiy-icons';
import { Button } from '~/components/ui/button';

export function PropertyServices() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="font-semibold text-lg"> What is included</div>
      <div className="grid grid-cols-2 gap-x-1 gap-y-3">
        {Object.entries(PropertyServicesIcons).map(([key, value], index) => (
          <div key={index} className="flex items-center gap-2">
            {value.icon} <span>{value.text}</span>
          </div>
        ))}
      </div>

      <div>
        <Button variant="outline" className="bg-inherit font-semibold border-slate-900" size={'lg'}>
          Show all facilities
        </Button>
      </div>
    </div>
  );
}
