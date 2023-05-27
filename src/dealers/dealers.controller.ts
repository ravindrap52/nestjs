import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DealersService } from './dealers.service';
import { IDealers } from './interfaces/dealers.interface';
import { IDealerDetails } from './interfaces/dealerDetails.interface';

@Controller('dealers')
export class DealersController {
  constructor(private readonly dealersService: DealersService) {}

  @Get()
  async getAllDealers(): Promise<IDealers[]> {
    return this.dealersService.findAllDealers();
  }

  @Get(':dealerId')
  async getDealer(
    @Param('dealerId', ParseIntPipe) dealerId: number,
  ): Promise<IDealerDetails[]> {
    return this.dealersService.findDealerByDealerID(dealerId);
  }
}
