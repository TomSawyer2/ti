import * as fs from 'fs';
import * as path from 'path';

export const injectFiles = (path: string, data: { name: string }): void => {
  // 遍历文件夹，找到所有{{ @ti.inject="name" }}，替换为name
  traverseDirectory(path, data);
};

export const replaceInjects = (filePath: string, data: { name: string }): void => {
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

export const traverseDirectory = (directoryPath: string, data: { name: string }): void => {
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
