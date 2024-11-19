import {
    IsBoolean,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsObject,
    IsString,
} from 'class-validator';

export class CreatePreferenceDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsEmail()
    email: string;

    @IsObject()
    preferences: {
        @IsBoolean()
        marketing: boolean;

        @IsBoolean()
        newsletter: boolean;

        @IsBoolean()
        updates: boolean;

        @IsEnum(['daily', 'weekly', 'monthly', 'never'])
        frequency: 'daily' | 'weekly' | 'monthly' | 'never';

        @IsObject()
        channels: {
            @IsBoolean()
            email: boolean;

            @IsBoolean()
            sms: boolean;

            @IsBoolean()
            push: boolean;
        };
    };

    @IsString()
    @IsNotEmpty()
    timezone: string;
}