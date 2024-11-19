import {
    IsBoolean,
    IsEmail,
    IsEnum,
    IsOptional,
    IsObject,
    IsString,
} from 'class-validator';

export class UpdatePreferenceDto {
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsObject()
    preferences?: {
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
        @IsObject()
        channels?: {
            @IsOptional()
            @IsBoolean()
            email?: boolean;

            @IsOptional()
            @IsBoolean()
            sms?: boolean;

            @IsOptional()
            @IsBoolean()
            push?: boolean;
        };
    };

    @IsOptional()
    @IsString()
    timezone?: string;
}