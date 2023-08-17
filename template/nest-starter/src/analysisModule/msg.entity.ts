import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'MSG' })
export class Msg {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  localId: number;

  @Column()
  TalkerId: number;

  @Column()
  Wxid?: string;

  @Column()
  MsgSvrID: string;

  @Column()
  Type: number;

  @Column()
  SubType: number;

  @Column()
  IsSender: number;

  @Column()
  CreateTime: number;

  @Column()
  Sequence: number;

  @Column()
  StatusEx: number;

  @Column()
  FlagEx: number;

  @Column()
  Status: number;

  @Column()
  MsgServerSeq: number;

  @Column()
  MsgSequence: number;

  @Column()
  StrTalker: string;

  @Column()
  StrContent: string;

  @Column()
  DisplayContent: string;

  @Column()
  Reserved0: string;

  @Column()
  Reserved1: string;

  @Column()
  Reserved2: string;

  @Column()
  Reserved3: string;

  @Column()
  Reserved4: string;

  @Column()
  Reserved5: string;

  @Column()
  Reserved6: string;

  @Column('blob')
  CompressContent?: string;

  @Column('blob')
  BytesExtra?: string;

  @Column()
  BytesTrans: string;
}
