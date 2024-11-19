import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserPreference,
  UserPreferenceDocument,
} from './user-preferences.schema';
import { CreatePreferenceDto, UpdatePreferenceDto } from './dtos';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel(UserPreference.name)
    private readonly userPreferenceModel: Model<UserPreferenceDocument>,
  ) {}

  async createPreference(dto: CreatePreferenceDto): Promise<UserPreference> {
    const existing = await this.userPreferenceModel.findOne({ userId: dto.userId });
    if (existing) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    return this.userPreferenceModel.create(dto);
  }

  async getPreference(userId: string): Promise<UserPreference> {
    const preference = await this.userPreferenceModel.findOne({ userId });
    if (!preference) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return preference;
  }

  async updatePreference(
    userId: string,
    dto: UpdatePreferenceDto,
  ): Promise<UserPreference> {
    const updated = await this.userPreferenceModel.findOneAndUpdate(
      { userId },
      dto,
      { new: true },
    );
    if (!updated) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return updated;
  }

  async deletePreference(userId: string): Promise<{ deleted: boolean }> {
    const result = await this.userPreferenceModel.deleteOne({ userId });
    if (result.deletedCount === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { deleted: true };
  }
}
