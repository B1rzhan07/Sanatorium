import React from 'react';
import { PropertyReview } from './property-review';
export function PropertyReviews() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <PropertyReview />
      <PropertyReview />
      <PropertyReview />
      <PropertyReview />
    </div>
  );
}
