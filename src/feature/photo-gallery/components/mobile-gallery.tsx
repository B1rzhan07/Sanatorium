'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer';
import { Button } from '~/components/ui/button';
import { ChevronLeft, Share } from 'lucide-react';

export const MobileGallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Carousel className="w-full relative">
        <CarouselContent className="">
          {Array(4)
            .fill(2)
            .map((_, index) => (
              <CarouselItem key={index} className="h-2/5">
                {
                  <div onClick={() => setOpen(true)}>
                    <Image
                      className=" h-full w-full"
                      src="/static/room.jpg"
                      alt="Sheraton Hotel"
                      width={350}
                      height={200}
                    />
                  </div>
                }
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="absolute right-2 bottom-2 text-sm bg-black py-1 px-2 rounded-sm text-slate-50 bg-opacity-50 ">
          1/40
        </div>
      </Carousel>
      <MobileGalleryDrawer handleOpen={setOpen} open={open} />
    </div>
  );
};

interface DrawerProps {
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const MobileGalleryDrawer = ({ handleOpen, open }: DrawerProps) => {
  const handleClose = () => {
    handleOpen(false);
  };

  return (
    <Drawer
      open={open}
      onOpenChange={(e) => {
        handleOpen(e);
      }}
    >
      <DrawerContent className="h-full rounded-none bg-black border-black">
        <DrawerHeader>
          <div className="flex flex-row justify-between items-center text-slate-50">
            <div className="text-slate-50 hover:cursor-pointer" onClick={handleClose}>
              <ChevronLeft size={24} color="white" />
            </div>
            <div className="text-slate-50 ">1/40</div>
            <div className="flex gap-4">
              <Share size={20} color="white" />
            </div>
          </div>
        </DrawerHeader>
        <div className="h-[80%] flex items-center">
          <Carousel className="w-full ">
            <CarouselContent className="">
              {Array(4)
                .fill(2)
                .map((_, index) => (
                  <CarouselItem key={index} className="h-2/5">
                    {
                      <div className="">
                        <Image
                          className=" h-full w-full"
                          src="/static/room.jpg"
                          alt="Sheraton Hotel"
                          width={350}
                          height={200}
                        />
                      </div>
                    }
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
