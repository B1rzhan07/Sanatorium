'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { RHFTextField } from '~/components/hook-form';
import { Button } from '~/components/ui/button';
import { LoadingButton } from '~/components/ui/loading-button';

export default function CheckoutPage() {
  const [showPromoCode, setShowPromoCode] = useState(false);
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      cardName: '',
      cardNumber: '',
      cardExpiration: '',
      cardCvv: '',
      promoCode: '',
    },
  });

  const togglePromoCode = () => {
    setShowPromoCode(!showPromoCode);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Payment Details</h2>

          <RHFTextField name="cardName" label="Name on Card" placeholder="John Doe" />
          <RHFTextField name="cardNumber" label="Card Number" placeholder="1234 5678 9101 1121" />
          <div className="grid grid-cols-2 gap-4">
            <RHFTextField name="cardExpiration" label="Expiration Date" placeholder="MM/YY" />
            <RHFTextField name="cardCvv" label="CVV" placeholder="123" />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Have a promo code?</span>
            <Button type="button" variant="secondary" onClick={togglePromoCode}>
              {showPromoCode ? 'Hide' : 'Enter Code'}
            </Button>
          </div>

          {showPromoCode && (
            <RHFTextField name="promoCode" label="Promo Code" placeholder="Enter your promo code" />
          )}

          <LoadingButton type="submit" isLoading={methods.formState.isSubmitting}>
            Pay Now
          </LoadingButton>
        </form>
      </div>
    </FormProvider>
  );
}
