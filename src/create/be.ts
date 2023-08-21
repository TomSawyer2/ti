import { copyDir } from '../util/file';
import { BackEndKit } from '../typings';
import { injectFiles } from '../util/inject';

/**
 * 创建后端项目
 *
 * @exports
 * @param {BackEndKit} kit
 * @param {*} data
 */
export const createBeProject = (kit: BackEndKit, data: { name: string }): void => {
  const { name } = data;
  const targetPath = `${process.cwd()}/${name}`;
  switch (kit) {
    case BackEndKit.nestStarter:
      createNestStarter(name);
      injectFiles(targetPath, data);
      break;
    default:
      throw new Error('不存在对应框架');
  }
};

/**
 * 创建nest-starter
 *
 * @param {string} name
 */
const createNestStarter = (name: string): void => {
  const templatePath = `${__dirname}/template/nest-starter`;
  const targetPath = `${process.cwd()}/${name}`;
  copyDir(templatePath, targetPath);
};
