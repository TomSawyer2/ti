import { Command } from 'commander';
import * as commandInitMap from './command/';
import { error } from './util/log';

/**
 * @export
 * @return {*}
 */
export function createProgram(): Command {
  const program = new Command();

  program.action(() => {
    program.help();
  });

  // 初始化指令
  Object.keys(commandInitMap).forEach(initActionKey => {
    try {
      commandInitMap[initActionKey](program);
    } catch (err: any) {
      error(`指令初始化失败: ${err.message}`);
    }
  });
  return program;
}
