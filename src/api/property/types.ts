export interface City {
  id: number;
  name: string;
  slug: string;
}
export type Cities = City[];

export type GetCitiesResponse = Cities;

interface Service {
  id: number;
  name: string;
  slug: string;
}
interface Property {
  name: string;
  address: string;
  cityId: number;
  postalCode: string;
  description: string;
  contactName: string;
  contactPhone: string;
  propertyType: string;
  rating?: number;
  treatments?: number[] | undefined;
  services?: number[] | undefined;
}

export type OwnerProperties = OwnerProperty[];

export interface OwnerProperty extends Property {
  id: number;
  ownerId: number;
  status: string;
  owner: Owner;
}

export interface Owner {
  id: number;
  email: string;
  password: string;
  firstName: any;
  lastName: any;
  phoneNumber: any;
  isActivated: boolean;
}

export interface PropertyRequest extends Property {}
export type EditPropertyRequest = Partial<Property>;

export interface ProperyResponse {
  propertyId: number;
}

export type GetServicesResponse = Service[];
