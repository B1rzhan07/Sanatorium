'use client';
import React, { useState, useEffect } from 'react';
import propertyApi from '~/api/property/api';
import { PropertyServicesIcons } from '~/components/facilitiy-icons';
import { Button } from '~/components/ui/button';
import { useAppSelector } from '~/store/hooks';
import { skipToken } from '@reduxjs/toolkit/query/react';

type PropertyServiceKey = keyof typeof PropertyServicesIcons;

export function PropertyServicesForm() {
  // const { data: services } = propertyApi.endpoints.getPropertyServices.useQuery(null);
  const services = [
    {
      id: 1,
      name: 'WIFI',
      slug: 'wifi',
    },
    {
      id: 2,
      name: 'Бассейн',
      slug: 'pool',
    },
    {
      id: 3,
      name: 'Тренажерный зал',
      slug: 'gym',
    },
    {
      id: 4,
      name: 'Игровая площадка',
      slug: 'playground',
    },
    {
      id: 5,
      name: 'Трансфер',
      slug: 'transfer',
    },
    {
      id: 6,
      name: 'СПА',
      slug: 'spa',
    },
    {
      id: 7,
      name: 'Сауна',
      slug: 'sauna',
    },
    {
      id: 8,
      name: 'Паркинг',
      slug: 'parking',
    },
    {
      id: 9,
      name: 'Ресторан',
      slug: 'restaurant',
    },
    {
      id: 10,
      name: 'Парк',
      slug: 'park',
    },
  ];

  const [editProperty] = propertyApi.endpoints.editOwnerProperty.useMutation();
  const propertyId = useAppSelector((state) => state.propertySlice.propertyId);
  const { data: property } = propertyApi.endpoints.getOwnerProperty.useQuery(
    propertyId ? { id: propertyId.toString() } : skipToken,
    { skip: !propertyId },
  );

  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  useEffect(() => {
    if (property?.services) {
      setSelectedServices(property.services);
    }
  }, [property]);

  const handleSelect = (id: number) => {
    setSelectedServices((prev) => {
      const index = prev.indexOf(id);
      return index >= 0 ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  const handleSave = async () => {
    if (propertyId) {
      try {
        const response = await editProperty({
          data: { services: selectedServices },
          id: propertyId.toString(),
        }).unwrap();
        console.log('Save successful:', response);
      } catch (error) {
        console.error('Failed to save services:', error);
      }
    } else {
      console.error('Property ID is not available');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        {services?.map(({ name, id, slug }) => {
          const isSelected = selectedServices.includes(id);
          return (
            <ServicesCard
              key={slug}
              icon={PropertyServicesIcons[slug.toLowerCase() as PropertyServiceKey]?.icon}
              text={name}
              onSelect={() => handleSelect(id)}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  text: string;
  onSelect: () => void;
  isSelected?: boolean;
}

const ServicesCard = ({ icon, text, onSelect, isSelected }: CardProps) => {
  return (
    <div
      className={`rounded-lg flex flex-col bg-slate-50 border-slate-700 px-4 py-6 items-center cursor-pointer transition-all duration-150 ease-in-out ${
        isSelected ? 'border-[3px] bg-zinc-200' : 'border-[1px] hover:border-[3px]'
      }`}
      onClick={onSelect}
    >
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
