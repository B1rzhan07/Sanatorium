'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react';
import propertyApi from '~/api/property/api';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { LoadingButton } from '~/components/ui/loading-button';

import { Skeleton } from '~/components/ui/skeleton';

import { PropertyRegistrationForm } from '~/feature/become-a-host/components/property-registration-form';

import { ReservationsSummaryTabs } from '~/feature/reservation/components/reservations-summary/reservations-summary-tabs';
export default function PropertyPage() {
  const params = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const { data: property, isLoading } = propertyApi.endpoints.getOwnerProperty.useQuery({
    id: params?.id as string,
  });
  const [deleteProperty, { isLoading: isDeleteLoading }] =
    propertyApi.endpoints.deleteOwnerProperty.useMutation();

  return (
    <div className="">
      <div className="mt-2 md:m-0 flex justify-between items-center flex-col md:flex-row">
        <div>
          <h4 className="text-lg font-semibold leading-none mb-4">
            {isLoading ? <Skeleton className="w-[200px] h-[20px]" /> : property?.propertyType}
          </h4>
          <p className="t text-base text-muted-foreground flex">
            Status:{' '}
            {isLoading ? <Skeleton className=" ml-2 w-[150px] h-[20px]" /> : property?.status}
          </p>
          <p className="t text-base text-muted-foreground flex">
            Name: {isLoading ? <Skeleton className=" ml-2 w-[150px] h-[20px]" /> : property?.name}
          </p>
          <p className="t text-base text-muted-foreground flex">
            Owner:{' '}
            {isLoading ? (
              <Skeleton className=" ml-2 w-[200px] h-[20px]" />
            ) : (
              property?.owner.firstName
            )}{' '}
            {property?.owner.lastName}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <Dialog
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
            }}
          >
            <DialogTrigger asChild>
              <Button variant="outline" className="w-[200px] md:w-[300px]">
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when done.
                </DialogDescription>
              </DialogHeader>
              <PropertyRegistrationForm
                property={property}
                closeModal={() => {
                  setIsOpen(false);
                }}
              />
            </DialogContent>
          </Dialog>

          <LoadingButton
            className="w-[200px] md:w-[300px]"
            isLoading={isDeleteLoading}
            onClick={() => {
              property &&
                deleteProperty({ id: property.id.toString() })
                  .unwrap()
                  .then(() => {
                    router.push('/hosting');
                  });
            }}
          >
            Delete
          </LoadingButton>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between flex-wrap">
          <div className="text-lg font-semibold">Your reservations</div>
        </div>
        <ReservationsSummaryTabs />
        <div>
          <Link href="/hosting/reservations" className="text-pretty">
            All reservations(4)
          </Link>
        </div>
      </div>
    </div>
  );
}
