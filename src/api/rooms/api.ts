'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import queryString from 'query-string';
import { getRoomTypesRequest, getRoomTypesResponse } from './types';

export const ROOM_API_REDUCER_KEY = 'roomsApi';

const roomsApi = createApi({
  reducerPath: ROOM_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    credentials: 'include',
    paramsSerializer: (params) => queryString.stringify(params),
  }),
  tagTypes: ['Rooms', 'RoomTypes'],
  endpoints: (builder) => ({
    getRoomTypesByPropertyId: builder.query<getRoomTypesResponse, getRoomTypesRequest>({
      query: ({ propertyId }) => `owner/${propertyId}/room-types`,
      providesTags: ['Rooms'],
    }),

    createRoomType: builder.mutation<any, any>({
      query: (body) => ({
        url: 'room/create-room-type',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Rooms'],
    }),

    editProperty: builder.mutation<any, any>({
      query: (body) => ({
        url: `owner/${body.propertyId}/room-types/${body.roomTypeId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Rooms'],
    }),
    deleteRoomType: builder.mutation<
      any,
      {
        propertyId: string;
        roomTypeId: number;
      }
    >({
      query: ({ propertyId, roomTypeId }) => ({
        url: `owner/${propertyId}/room-types/${roomTypeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Rooms'],
    }),
  }),
});
export default roomsApi;
