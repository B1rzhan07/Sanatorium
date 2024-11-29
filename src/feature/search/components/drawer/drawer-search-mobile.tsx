import * as React from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from '~/components/ui/drawer';
import { Search } from 'lucide-react';
import { PopoverGuests } from '../popover/popover-guests';
import { DateRangePicker } from '~/components/date-range-picker';
import { PopoverDestination } from '../popover/popover-destination';

export function DrawerDemo({
  data,
  setData,
}: {
  data: { name: string; age: string; count: number; keyName: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ name: string; age: string; count: number; keyName: string }[]>
  >;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="bg-[#E9F0F3] w-full rounded-full mt-3 py-4 px-3 flex flex-row gap-4 justify-start items-center">
          <Search />
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-left">Искать Везде</span>
            <div className="flex flex-row gap-2">
              <span className="text-xs">Week</span>
              <span className="text-xs">Who goes?</span>
            </div>
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[50vh] px-5 mt-2">
        <PopoverGuests setData={setData} data={data} />
        <DateRangePicker className="bg-slate-50 mt-2 rounded-2xl items-center shadow-md" />
        <PopoverDestination />
      </DrawerContent>
    </Drawer>
  );
}
