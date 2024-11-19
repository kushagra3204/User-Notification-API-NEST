import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SendNotificationDto } from './dtos/send-notification.dto';
import { QueryLogsDto } from './dtos/query-logs.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  async sendNotification(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationsService.sendNotification(sendNotificationDto);
  }

  @Get(':userId/logs')
  async getLogs(@Param('userId') userId: string, @Query() query: QueryLogsDto) {
    return this.notificationsService.getNotificationLogs(userId, query);
  }

  @Get('stats')
  async getStats() {
    return this.notificationsService.getStatistics();
  }
}
