import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Msg } from './msg.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnalysisService {
  constructor(
    @InjectRepository(Msg)
    private msgRepository: Repository<Msg>
  ) {}

  async allocateDataForMsg(): Promise<void> {
    await this.msgRepository.find().then((msg0s) => {
      msg0s.forEach((msg0) => {
        let msg = new Msg();
        msg = msg0;
        this.msgRepository.save(msg);
      });
    });
  }
}
