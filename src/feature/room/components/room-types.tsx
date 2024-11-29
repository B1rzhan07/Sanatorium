'use client';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import { RoomTypeCard } from './room-type-card';
import { useResponsive } from '~/hooks/use-responsive';

export function RoomTypes() {
  const isDesktop = useResponsive('up', 'md');

  return <>{isDesktop ? <DesktopRoomTypes /> : <MobileRoomTypes />}</>;
}

const DesktopRoomTypes = () => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full flex flex-col gap-4"
    >
      <div className="flex justify-between">
        <div className="text-lg font-semibold hidden md:block">See the room types</div>
        <div className="space-x-2 hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>

      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <RoomTypeCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const MobileRoomTypes = () => {
  return <div className="max-w-screen">Mobile Room Types here</div>;
};
