import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from './notification-log.schema';
import { SendNotificationDto } from './dtos/send-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel('NotificationLog') private readonly logModel: Model<NotificationLog>,
  ) {}

  async sendNotification(dto: SendNotificationDto) {
    const { userId, type, channel, content } = dto;

    try {
      // Simulate notification sending (e.g., via email, SMS, or push)
      console.log(`Sending ${type} notification to ${userId} via ${channel}:`, content);

      // Log success
      const log = new this.logModel({
        userId,
        type,
        channel,
        status: 'sent',
        sentAt: new Date(),
        metadata: { content },
      });
      await log.save();

      return { success: true, message: 'Notification sent successfully!' };
    } catch (error) {
      // Log failure
      const log = new this.logModel({
        userId,
        type,
        channel,
        status: 'failed',
        failureReason: error.message,
      });
      await log.save();

      return { success: false, message: 'Notification sending failed.' };
    }
  }

  async getNotificationLogs(userId: string, query: any) {
    return this.logModel.find({ userId, ...query }).exec();
  }

  async getStatistics() {
    const stats = await this.logModel.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);
    return stats;
  }
}
