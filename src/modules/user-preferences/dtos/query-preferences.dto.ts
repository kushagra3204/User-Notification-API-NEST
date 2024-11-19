import { IsOptional, IsBoolean, IsEnum, IsString } from 'class-validator';

export class QueryPreferencesDto {
  @IsOptional()
  @IsBoolean()
  marketing?: boolean;

  @IsOptional()
  @IsBoolean()
  newsletter?: boolean;

  @IsOptional()
  @IsBoolean()
  updates?: boolean;

  @IsOptional()
  @IsEnum(['daily', 'weekly', 'monthly', 'never'])
  frequency?: 'daily' | 'weekly' | 'monthly' | 'never';

  @IsOptional()
  @IsString()
  timezone?: string;
}
