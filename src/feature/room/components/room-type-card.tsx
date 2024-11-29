import React from 'react';
import Image from 'next/image';

export function RoomTypeCard() {
  return (
    <div className="space-y-2 ">
      <div className="rounded-xl overflow-hidden">
        <Image
          className="object-cover h-full w-full "
          src="/static/room.jpg"
          alt="Sheraton Hotel"
          width={350}
          height={200}
        />
      </div>
      <div className="pl-2 flex flex-col">
        <span className="text-base font-medium">Semi-Lux</span>
        <span className="text-sm font-normal">4 beds</span>
      </div>
    </div>
  );
}
