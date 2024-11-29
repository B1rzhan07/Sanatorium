'use client';
import React from 'react';

import { useRouter } from 'next/navigation';

import { DateRangePicker } from '~/components/date-range-picker';
import { PopoverGuests } from './popover/popover-guests';
import { LayoutSearchItem } from './layout-search-item';
import { PopoverDestination } from './popover/popover-destination';
import { useResponsive } from '~/hooks/use-responsive';
import { Search } from 'lucide-react';
import { DrawerDemo } from './drawer/drawer-search-mobile';

export function SearchBar() {
  const isDesktop = useResponsive('up', 'md');

  const [data, setData] = React.useState([
    { name: 'Взрослые', age: 'От 13 лет', count: 0, keyName: 'adults' },
    { name: 'Дети', age: '2-12 лет', count: 0, keyName: 'children' },
    { name: 'Младенцы', age: 'До 2 лет', count: 0, keyName: 'infants' },
  ]);

  return (
    <form>
      {isDesktop && (
        <div className="text-center flex justify-center">
          <div className="border-2 rounded-full border-gray-20 shadow-md max-w-[850px] w-full">
            <div className="flex items-center flex-row">
              <LayoutSearchItem className="p-6">
                <PopoverDestination />
              </LayoutSearchItem>
              <LayoutSearchItem className="p-3.5">
                <DateRangePicker className="" />
              </LayoutSearchItem>
              <LayoutSearchItem className="p-5">
                <PopoverGuests setData={setData} data={data} />
              </LayoutSearchItem>
            </div>
          </div>
        </div>
      )}
      {!isDesktop && <DrawerDemo data={data} setData={setData} />}
    </form>
  );
}
