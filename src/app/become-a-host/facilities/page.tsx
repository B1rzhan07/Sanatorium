'use client';
import React from 'react';
import roomsApi from '~/api/rooms/api';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { PropertyServicesForm } from '~/feature/become-a-host';
import { useAppSelector } from '~/store/hooks';

export default function Page() {
  const [romeTypeId, setRoomTypeId] = React.useState<number>();
  const propertyId = useAppSelector((state) => state.propertySlice.propertyId);
  const { data: roomTypes } = roomsApi.endpoints.getRoomTypesByPropertyId.useQuery({
    propertyId,
  });

  console.log(roomTypes);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex justify-between flex-row">
        <div className=" text-left">
          <div className="text-3xl font-semibold">Tell guests what your room type offer</div>
          <div className="text-xl text-slate-400">
            You can add more amenities after you publish your listing.
          </div>
        </div>
        <Select
          onValueChange={(value) => {
            setRoomTypeId(parseInt(value));
          }}
          value={romeTypeId?.toString()}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a room type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {roomTypes?.map((roomType) => (
                <SelectItem key={roomType.id} value={roomType.id.toString()}>
                  {roomType.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1 items-center justify-center">
        <PropertyServicesForm />
      </div>
    </div>
  );
}
