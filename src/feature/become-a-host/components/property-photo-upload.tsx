'use client';
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
export function PropertyPhotoUpload() {
  const [photos, setPhotos] = useState<string[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const newPhotos = Array.from(files).map((file) => URL.createObjectURL(file));
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, idx) => idx !== index));
  };
  return (
    <div className="mt-10 space-y-8">
      <div className="flex">
        <div className="flex-1">
          <div className="text-3xl font-semibold">{`Let's now upload photo`}</div>
          <div className="text-xl text-slate-400">{`Upload good quality photos`}</div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <UploadPhoto handleFileChange={handleFileChange} />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-[80%] m-auto">
        <div className="aspect-square">
          <Image
            className=" h-full w-full object-cover rounded-2xl"
            src="/static/room.jpg"
            alt="Sheraton Hotel"
            width={500}
            height={500}
          />
        </div>

        <div className="aspect-square">
          <Image
            className=" h-full w-full object-cover rounded-2xl"
            src="/static/room.jpg"
            alt="Sheraton Hotel"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-square">
          <Image
            className=" h-full w-full object-cover rounded-2xl"
            src="/static/room.jpg"
            alt="Sheraton Hotel"
            width={500}
            height={500}
          />
        </div>

        {photos.map((photo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="aspect-square w-full" key={index}>
            <Image
              className=" h-full w-full object-cover rounded-2xl "
              src={photo}
              alt="Sheraton Hotel"
              width={500}
              height={500}
            />
          </div>
        ))}
        <AdditionalPhotoUpload handleFileChange={handleFileChange} />
      </div>
    </div>
  );
}

interface UploadPhotoProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadPhoto = ({ handleFileChange }: UploadPhotoProps) => {
  return (
    <>
      <Label
        htmlFor="inputPhoto"
        className=" border-2 border-slate-600 px-2 py-3 rounded-md hover:cursor-pointer"
      >
        Upload Photo
      </Label>
      <Input
        type="file"
        id="inputPhoto"
        accept="image/*"
        onChange={handleFileChange}
        multiple
        hidden
        className="file-selector-button-none hidden"
      />
    </>
  );
};

const AdditionalPhotoUpload = ({ handleFileChange }: UploadPhotoProps) => {
  return (
    <>
      <Label
        htmlFor="inputImage"
        className=" min-h-80 rounded-2xl border-2 border-dotted border-slate-600 px-2 py-3  hover:cursor-pointer"
      >
        <div className=" flex flex-col items-center justify-center h-full">
          <Plus size={40} />
          <span className="text-lg"> add more</span>
        </div>
      </Label>
      <Input
        type="file"
        id="inputImage"
        accept="image/*"
        onChange={handleFileChange}
        multiple
        hidden
        className="file-selector-button-none hidden"
      />
    </>
  );
};
