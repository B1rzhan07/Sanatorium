export type getRoomTypesResponse = Roomtype[];

export type getRoomTypesRequest = {
  propertyId: string;
};

export interface Roomtype {
  id: number;
  name: string;
  description: string;
  surfaceArea: number;
  pricePerDay: number;
  propertyId: number;
  capacity: number;
  roomTypeFacilities: RoomTypeFacility[];
}
export interface RoomTypeFacility {
  facility: Facility;
}

export interface Facility {
  id: number;
  name: string;
  slug: string;
}
