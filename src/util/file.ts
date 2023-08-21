import * as fs from 'fs';
import * as path from 'path';
import { error } from './log';

/**
 * 保存文件
 *
 * @exports
 * @param {string} content 内容
 * @param {string} pathName 路径
 * @param {string} fileName 文件名
 */
export const saveFile = (content: string, pathName: string, fileName: string): void => {
  const filePath = path.join(pathName, fileName);

  fs.writeFile(filePath, content, err => {
    if (err) error(err.message);
  });
};

/**
 * 删除文件夹
 *
 * @exports
 * @param {string} dir 文件夹名称
 */
export const deleteDir = (dir: string): void => {
  // 读取目录中的所有文件和子文件夹
  const files = fs.readdirSync(dir);

  // 遍历所有文件和子文件夹
  for (const file of files) {
    const filePath = path.join(dir, file);

    // 如果是子文件夹，递归删除
    if (fs.statSync(filePath).isDirectory()) {
      deleteDir(filePath);
    } else {
      // 如果是文件，直接删除
      fs.unlinkSync(filePath);
    }
  }

  // 删除目录本身
  fs.rmdirSync(dir);
};

/**
 * 递归复制文件夹
 *
 * @exports
 * @param {string} src
 * @param {string} dest
 */
export const copyDir = (src: string, dest: string): void => {
  if (fs.existsSync(dest)) {
    deleteDir(dest);
  }
  // 创建目标文件夹
  fs.mkdirSync(dest, { recursive: true });

  // 读取源文件夹中的所有文件和子文件夹
  const files = fs.readdirSync(src);

  // 遍历所有文件和子文件夹
  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    // 如果是子文件夹，递归拷贝
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      // 如果是文件，直接拷贝
      fs.copyFileSync(srcPath, destPath);
    }
  }
};
