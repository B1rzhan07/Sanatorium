'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import queryString from 'query-string';
import {
  Cities,
  EditPropertyRequest,
  GetCitiesResponse,
  GetServicesResponse,
  OwnerProperties,
  OwnerProperty,
  PropertyRequest,
  ProperyResponse,
} from './types';

export const PROPERTY_API_REDUCER_KEY = 'propertyApi';

const propertyApi = createApi({
  reducerPath: PROPERTY_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    credentials: 'include',
    paramsSerializer: (params) => queryString.stringify(params),
  }),
  tagTypes: ['Property'],
  endpoints: (builder) => ({
    getCities: builder.query<GetCitiesResponse, {}>({
      query: () => {
        return {
          url: 'cities',
          method: 'GET',
        };
      },
    }),
    getProperties: builder.query<Cities, { city: string }>({
      query: (city) => {
        return {
          url: `properties?city=${city}`,
          method: 'GET',
        };
      },
    }),
    getOwnerProperties: builder.query<OwnerProperties, {}>({
      query: () => {
        return {
          url: `owner/properties`,
          method: 'GET',
        };
      },
      providesTags: ['Property'],
    }),
    getOwnerProperty: builder.query<OwnerProperty, { id: string }>({
      query: ({ id }) => {
        return {
          url: `owner/properties/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['Property'],
    }),
    createProperty: builder.mutation<ProperyResponse, PropertyRequest>({
      query: (data) => {
        return {
          url: `property`,
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Property'],
    }),
    editOwnerProperty: builder.mutation<OwnerProperty, { id: string; data: EditPropertyRequest }>({
      query: ({ id, data }) => {
        return {
          url: `owner/properties/${id}`,
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['Property'],
    }),
    deleteOwnerProperty: builder.mutation<any, { id: string }>({
      query: ({ id }) => {
        return {
          url: `owner/properties/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Property'],
    }),
    getPropertyServices: builder.query<GetServicesResponse, null>({
      query: () => {
        return {
          url: `service`,
          method: 'GET',
        };
      },
    }),
  }),
});
export default propertyApi;
