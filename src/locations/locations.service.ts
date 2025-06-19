/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import * as rawLocationsData from '../database/mock/locations-data.json';
import { Location } from 'src/common/interfaces/location.interface';

const locationsData: Location[] = rawLocationsData as Location[];

@Injectable()
export class LocationsService {
  getLocations(): Location[] {
    return locationsData;
  }
}
