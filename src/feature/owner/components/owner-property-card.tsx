import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { OwnerProperty } from '~/api/property/types';

interface IProps {
  property: OwnerProperty;
}

export function OnwerPropertyCard({ property }: IProps) {
  const router = useRouter();
  return (
    <div
      className="w-full aspect-[4/3] hover:cursor-pointer mt-2"
      onClick={() => {
        router.push(`/hosting/${property.id}`);
      }}
    >
      <div className="relative aspect-square">
        <Image
          className="object-cover h-full rounded-xl"
          src={'/static/HomeImage.svg'}
          alt="Sheraton Hotel"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-2">{property.propertyType}</div>
      <div className="flex justify-between">
        <div className="text-lg font-medium">
          <span>{property.address}</span>
        </div>
        <div className="flex items-center">
          {property?.rating}
          <Star size={16} fill="black" className="ml-0.5" />
        </div>
      </div>
      <div>
        <span className="font-semibold">Postal code: {property.postalCode}</span>
      </div>
    </div>
  );
}
