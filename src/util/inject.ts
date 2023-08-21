import * as fs from 'fs';
import * as path from 'path';

/**
 * 将path路径下所有文件中匹配到{{ @ti.inject="xxx" }}的字符串替换为xxx变量的值
 *
 * @exports
 * @param {string} path
 * @param {*} data
 */
export const injectFiles = (path: string, data: { name: string }): void => {
  // 遍历文件夹，找到所有{{ @ti.inject="name" }}，替换为name
  traverseDirectory(path, data);
};

/**
 * 替换字符串
 *
 * @param {string} filePath
 * @param {*} data
 */
const replaceInjects = (filePath: string, data: { name: string }): void => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const keys = Object.keys(data);
  const replacedContent = fileContent.replace(/{{\s*@ti\.inject="(\w+)"\s*}}/g, (_, varName) => {
    if (keys.includes(varName)) {
      return data[varName] as string;
    } else {
      return _;
    }
  });
  fs.writeFileSync(filePath, replacedContent);
};

/**
 * 遍历指定文件夹
 *
 * @param {string} directoryPath
 * @param {*} data
 */
const traverseDirectory = (directoryPath: string, data: { name: string }): void => {
  const files = fs.readdirSync(directoryPath);
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isDirectory()) {
      traverseDirectory(filePath, data);
    } else if (fileStat.isFile()) {
      replaceInjects(filePath, data);
    }
  });
};
