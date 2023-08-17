import { copyDir } from '../util/file';
import { FrontEndKit } from '../typings';
import { injectFiles } from '../util/inject';

export const createFeProject = (kit: FrontEndKit, data: { name: string }): void => {
  const { name } = data;
  const targetPath = `${process.cwd()}/${name}`;
  switch (kit) {
    case FrontEndKit.umiStarter:
      createUmiStarter(name);
      injectFiles(targetPath, data);
      break;
    case FrontEndKit.umiPwa:
      createUmiPwa(name);
      injectFiles(targetPath, data);
      break;
    default:
      throw new Error('不存在对应框架');
  }
};

const createUmiStarter = (name: string): void => {
  const templatePath = `${__dirname}/template/umi-starter`;
  const targetPath = `${process.cwd()}/${name}`;
  copyDir(templatePath, targetPath);
};

const createUmiPwa = (name: string): void => {
  const templatePath = `${__dirname}/template/umi-pwa`;
  const targetPath = `${process.cwd()}/${name}`;
  copyDir(templatePath, targetPath);
};
