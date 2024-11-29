'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Star } from 'lucide-react';

interface Props {
  src: string;
}

export function PropertyCard({ src }: Props) {
  const router = useRouter();
  return (
    <div
      className="w-full aspect-[4/3] hover:cursor-pointer"
      onClick={() => router.push('property/1')}
    >
      <div className="relative aspect-square">
        <button className="absolute top-3 right-3">
          <Heart size="24" color="white" />
        </button>
        <Image
          className="object-cover h-full rounded-xl"
          src={src}
          alt="Sheraton Hotel"
          width={500}
          height={500}
        />
      </div>

      <div className="flex justify-between">
        <div className="text-lg font-medium">
          <span>Inter Continental, Almaty</span>
        </div>
        <div className="flex items-center">
          <Star size={16} fill="black" />
          4.3
        </div>
      </div>
      <div className="text-neutral-500">100 kilometers away</div>
      <div>
        <span className="font-semibold">$300</span> <span>night</span>
      </div>
    </div>
  );
}
