import { copyDir } from '../util/file';
import { FrontEndKit } from '../typings';
import { injectFiles } from 'src/util/inject';

export const createFeProject = (kit: FrontEndKit, data: { name: string }): void => {
  const { name } = data;
  const targetPath = `${process.cwd()}/${name}`;
  switch (kit) {
    case FrontEndKit.umiStarter:
      createUmiStarter(name);
      injectFiles(targetPath, data);
      break;
    case FrontEndKit.umiPwa:
      break;
    default:
      break;
  }
};

const createUmiStarter = (name: string): void => {
  // 将template/umi-starter文件夹复制到当前文件夹，并重命名为name
  const templatePath = `${__dirname}/template/umi-starter`;
  const targetPath = `${process.cwd()}/${name}`;
  copyDir(templatePath, targetPath);
};
