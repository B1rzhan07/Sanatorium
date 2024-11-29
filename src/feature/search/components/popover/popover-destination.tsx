import { Popover } from '@radix-ui/react-popover';
import Image from 'next/image';
import React from 'react';

import { PopoverContent, PopoverTrigger } from '~/components/ui/popover';

import { useResponsive } from '~/hooks/use-responsive';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import propertyApi from '~/api/property/api';
import { City } from '~/api/property/types';

export function PopoverDestination() {
  const [opened, setOpened] = React.useState(false);
  const isDesktop = useResponsive('up', 'md');
  const [cityValue, setCityValue] = React.useState<number>();

  const { data: cities } = propertyApi.endpoints.getCities.useQuery('');

  return (
    <Popover open={opened} onOpenChange={(open) => setOpened(open)}>
      <PopoverTrigger asChild>
        {isDesktop ? (
          <div>
            <div className="font-bold text-sm">Where</div>
            <div className="font-medium text-xs">Destination?</div>
          </div>
        ) : (
          <button className="flex justify-between border-1 rounded-2xl py-3 px-4 items-center shadow-md mt-2 bg-[#E9F0F3] h-[56px]">
            <span className="font-normal text-sm text-slate-500">When</span>
            <span className="font-bold text-sm">Pick Date</span>
          </button>
        )}
      </PopoverTrigger>
      <PopoverContent className="rounded-[8px] mt-4 right-0 border-1 px-8 py-4 w-[400px] flex flex-wrap gap-4">
        <Select
          onValueChange={(value) => {
            setCityValue(+value);
            setOpened(false);
          }}
          value={cityValue?.toString()}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cities</SelectLabel>
              {cities?.map((city: City) => (
                <SelectItem key={city.id} value={city.id.toString()}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  );
}
