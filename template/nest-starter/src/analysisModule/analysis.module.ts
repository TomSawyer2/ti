import { Dependencies, Module } from '@nestjs/common';
import { AnalysisController } from './analysis.controller';
import { AnalysisService } from './analysis.service';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Msg } from './msg.entity';

@Dependencies(DataSource)
@Module({
  imports: [TypeOrmModule.forFeature([Msg])],
  controllers: [AnalysisController],
  providers: [AnalysisService],
})
export class AnalysisModule {}
