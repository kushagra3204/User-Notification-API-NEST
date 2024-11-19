import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { UserPreferencesService } from './user-preferences.service';
  import { CreatePreferenceDto, UpdatePreferenceDto } from './dtos';
  
  @Controller('api/preferences')
  export class UserPreferencesController {
    constructor(private readonly service: UserPreferencesService) {}
  
    @Post()
    createPreference(@Body() dto: CreatePreferenceDto) {
      return this.service.createPreference(dto);
    }
  
    @Get(':userId')
    getPreference(@Param('userId') userId: string) {
      return this.service.getPreference(userId);
    }
  
    @Patch(':userId')
    updatePreference(
      @Param('userId') userId: string,
      @Body() dto: UpdatePreferenceDto,
    ) {
      return this.service.updatePreference(userId, dto);
    }
  
    @Delete(':userId')
    deletePreference(@Param('userId') userId: string) {
      return this.service.deletePreference(userId);
    }
  }  