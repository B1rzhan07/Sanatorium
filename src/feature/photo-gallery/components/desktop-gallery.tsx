'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogHeader, DialogContent } from '~/components/ui/dialog';
import { Heart, Share } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

const photoLinks = [
  '/static/maldives.webp',
  '/static/maldives2.webp',
  '/static/ritz.avif',
  '/static/homealone.webp',
  '/static/room.jpg',
  '/static/sheraton1.jpeg',
  '/static/sheraton2.jpeg',
  '/static/sheraton3.jpeg',
  '/static/stregis1.jpeg',
  '/static/stregis2.jpeg',
  '/static/stregis3.jpeg',
  '/static/maldives.webp',
  '/static/maldives2.webp',
];
export const DesktopGallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-100">
      <div className="grid grid-cols-2 gap-4 relative ">
        <div className="hover:cursor-pointer" onClick={() => setOpen(true)}>
          <Image
            className="object-cover h-full w-full "
            src="/static/sheraton1.jpeg"
            alt="Sheraton Hotel"
            width={500}
            height={500}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Array(4)
            .fill(2)
            .map((_, index) => (
              <div key={index} onClick={() => setOpen(true)} className="hover:cursor-pointer">
                <Image
                  className="object-cover h-full w-full"
                  src={photoLinks[index]}
                  alt="Sheraton Hotel"
                  width={500}
                  height={500}
                />
              </div>
            ))}
        </div>
        <div className="absolute right-2 bottom-2 text-sm bg-black py-1 px-2 rounded-sm text-slate-50 bg-opacity-50 ">
          1/40
        </div>
      </div>
      <DesktopGalleryDialog open={open} handleOpen={setOpen} />
    </div>
  );
};

interface DialogProps {
  open: boolean;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopGalleryDialog = ({ open, handleOpen }: DialogProps) => {
  const handleClose = () => {
    handleOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(e) => handleOpen(e)}>
      <DialogContent className="min-w-full min-h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-2xl border-black focus:ring-0">
        <DialogHeader className="max-h-16">
          <div className="flex flex-row justify-between items-center text-slate-50">
            <div className="text-slate-50 hover:cursor-pointer" onClick={handleClose}>
              Close
            </div>
            <div className="text-slate-50">1/40</div>
            <div className="text-slate-50">
              <div className="flex gap-4">
                <Heart size={20} color="white" />
                <Share size={20} color="white" />
              </div>
            </div>
          </div>
        </DialogHeader>
        <div className="h-full">
          <Carousel className="w-full flex justify-between items-center gap-2 px-8">
            <div>
              <CarouselPrevious />
            </div>
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className=" h-full">
                  <div className="p-1 w-full max-h-[520px] flex justify-center items center">
                    <Image
                      className="object-contain"
                      src={photoLinks[index]}
                      alt="Sheraton Hotel"
                      width={700}
                      height={700}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div>
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};
