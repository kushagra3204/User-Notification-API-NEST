import { IsOptional, IsEnum } from 'class-validator';

export class QueryLogsDto {
  @IsOptional()
  @IsEnum(['marketing', 'newsletter', 'updates'])
  type?: 'marketing' | 'newsletter' | 'updates';

  @IsOptional()
  @IsEnum(['email', 'sms', 'push'])
  channel?: 'email' | 'sms' | 'push';

  @IsOptional()
  @IsEnum(['pending', 'sent', 'failed'])
  status?: 'pending' | 'sent' | 'failed';
}
