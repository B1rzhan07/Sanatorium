import { Popover } from '@radix-ui/react-popover';
import Image from 'next/image';
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { useResponsive } from '~/hooks/use-responsive';

export interface IGuest {
  data: { name: string; age: string; count: number; keyName: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ name: string; age: string; count: number; keyName: string }[]>
  >;
}

export function PopoverGuests({ setData, data }: IGuest) {
  const isDesktop = useResponsive('up', 'md');
  const [opened, setOpened] = React.useState(false);

  return (
    <Popover open={opened} onOpenChange={(open) => setOpened(open)}>
      <PopoverTrigger asChild>
        {isDesktop ? (
          <button className="flex flex-row items-center justify-between w-full px-1">
            <div className="ml-4">
              <div className="font-bold text-sm text-left">Who</div>
              <div className="font-medium text-xs">Who goes?</div>
            </div>
            <div className="flex items-center p-3.5 rounded-full bg-[#FF385C] hover:bg-[#E00B41] gap-1">
              <Image src="/static/search.svg" alt="search" width={16} height={16} />
              {opened && <span className="text-white text-xs">Search</span>}
            </div>
          </button>
        ) : (
          <button className="flex justify-between border-2 rounded-2xl py-3 px-4 items-center mt-5 bg-[#E9F0F3] h-[56px]">
            <span className="font-normal text-sm text-slate-500">When</span>
            <span className="font-bold text-sm">Pick Date</span>
          </button>
        )}
      </PopoverTrigger>
      <PopoverContent className="rounded-[8px] mt-3 right-0 border-1 px-8 py-4 w-[350px]">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-light text-xs">{item.age}</span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    className="bg-secondary rounded-full p-2 border-2 hover:border-slate-700"
                    onClick={() =>
                      setData((prev) =>
                        prev.map((prevItem) =>
                          prevItem.keyName === item.keyName
                            ? { ...prevItem, count: prevItem.count - 1 }
                            : prevItem,
                        ),
                      )
                    }
                  >
                    <FaMinus size="12" />
                  </button>
                  <span className="f font-medium text-primary">{item.count}</span>
                  <button
                    className="bg-secondary rounded-full p-2 border-2 hover:border-slate-700"
                    onClick={() =>
                      setData((prev) =>
                        prev.map((prevItem) =>
                          prevItem.keyName === item.keyName
                            ? { ...prevItem, count: prevItem.count + 1 }
                            : prevItem,
                        ),
                      )
                    }
                  >
                    <FaPlus size="12" />
                  </button>
                </div>
              </div>
              <hr className="mb-5" />
            </div>
          );
        })}
        <div>
          <p className="t text-base font-semibold mb-3">Домашние животные</p>
          <div className="flex items-center gap-4">
            <button className="bg-secondary rounded-full p-2 border-2 hover:border-slate-700">
              <FaMinus size="12" />
            </button>
            <span className="f font-medium text-primary">0</span>
            <button className="bg-secondary rounded-full p-2 border-2 hover:border-slate-700">
              <FaPlus size="12" />
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
