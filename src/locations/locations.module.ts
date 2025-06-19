import { LocationsService } from './locations.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';

@Module({
  imports: [],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
