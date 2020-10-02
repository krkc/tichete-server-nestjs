import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketCategoriesModule } from './categories/ticket-categories.module';
import { TicketStatusesModule } from './statuses/ticket-statuses.module';
import { Ticket } from './ticket.entity';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), TicketStatusesModule, TicketCategoriesModule],
  providers: [TicketsService],
  exports: [TicketsService],
  controllers: [TicketsController],
})
export class TicketsModule {}
