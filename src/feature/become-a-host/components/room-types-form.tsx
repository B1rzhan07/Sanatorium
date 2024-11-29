'use client';
import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { FormProvider } from '~/components/hook-form/form-provider';
import { LoadingButton } from '~/components/ui/loading-button';
import { RHFTextArea, RHFTextField } from '~/components/hook-form';

import { useToast } from '~/components/ui/use-toast';
import { ToastAction } from '~/components/ui/toast';
import roomsApi from '~/api/rooms/api';
import { useAppSelector } from '~/store/hooks';

type FormValuesProps = {
  name: string;
  surfaceArea: string;
  pricePerDay: string;
  capacity: string;
  quantity: string;
  description: string;
};

interface Props {
  roomType?: any;
  closeModal?: () => void;
}

export function RoomTypesForm({ roomType, closeModal }: Props) {
  const PropertyRegistrationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surfaceArea: Yup.string().required('Surface Area is required'),
    pricePerDay: Yup.string().required('Price per day is required'),
    capacity: Yup.string().required('Capacity is required'),
    quantity: roomType ? Yup.string() : Yup.string().required('Quantity is required'),
    description: Yup.string().required('Description is required'),
  });
  const defaultValues = {
    name: roomType?.name || '',
    surfaceArea: roomType?.surfaceArea || '',
    pricePerDay: roomType?.pricePerDay || '',
    capacity: roomType?.capacity || '',
    quantity: roomType?.quantity || '',
    description: roomType?.description || '',
  };
  const [createRoomType, { isLoading: isLoadingCreate }] =
    roomsApi.endpoints.createRoomType.useMutation();

  const [editProperty, { isLoading: isLoadingEdit }] =
    roomsApi.endpoints.editProperty.useMutation();

  const methods = useForm<FormValuesProps>({
    //@ts-ignore
    resolver: yupResolver(PropertyRegistrationSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const { toast } = useToast();
  const propertyId = useAppSelector((state) => state.propertySlice.propertyId);
  const onSubmit = (data: FormValuesProps) => {
    if (data.quantity) {
      createRoomType({
        name: data.name,
        surfaceArea: +data.surfaceArea,
        pricePerDay: +data.pricePerDay,
        capacity: +data.capacity,
        quantity: +data.quantity,
        description: data.description,
        propertyId: +propertyId,
        facilityIds: [],
      })
        .unwrap()
        .then(() => {
          closeModal && closeModal();
          toast({
            title: `Room Type created`,
            action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
          });
        })
        .catch(() => {
          toast({
            title: 'Error creating room type',
            action: <ToastAction altText="Retry">Retry</ToastAction>,
          });
        });
    } else {
      editProperty({
        name: data.name,
        surfaceArea: +data.surfaceArea,
        pricePerDay: +data.pricePerDay,
        capacity: +data.capacity,
        description: data.description,
        propertyId: 4,
        facilityIds: [],
        roomTypeId: roomType.id,
      })
        .unwrap()
        .then(() => {
          closeModal && closeModal();
          toast({
            title: `Room Type updated`,
            action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
          });
        })
        .catch(() => {
          toast({
            title: 'Error updating room type',
            action: <ToastAction altText="Retry">Retry</ToastAction>,
          });
        });
    }
  };
  return (
    //@ts-ignore
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <RHFTextField name="name" label="Name" />
        <RHFTextField name="surfaceArea" label="Surface Area" />
        <RHFTextField name="pricePerDay" label="Price per day ($)" />
        <RHFTextField name="discauntRate" label="Discount for partners in %" placeholder="20%" />

        {!roomType && <RHFTextField name="quantity" label="Quantity" />}
        <RHFTextField name="capacity" label="Capacity" />
      </div>
      <div className="mb-4">
        <RHFTextArea name="description" label="Description" />
      </div>
      <LoadingButton type="submit" isLoading={isLoadingCreate || isLoadingEdit || isSubmitting}>
        Save
      </LoadingButton>
    </FormProvider>
  );
}
