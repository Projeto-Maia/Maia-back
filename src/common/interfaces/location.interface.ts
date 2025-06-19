export interface Location {
  id: number;
  name: string;
  type: 'cop' | 'standard' | 'judge';
  address: string;
  phone: string;
  description: string;
  latitude: number;
  longitude: number;
}
