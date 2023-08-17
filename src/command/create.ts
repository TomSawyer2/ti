import { Command } from 'commander';
import { commandExceptionProcess } from '../util/exception-process';
import { fail, start, success } from '../util/log';

export function initCreate(program: Command): void {
  program
    .command('create')
    .description('生成前后端框架代码')
    .alias('c')
    .option('-t, --type <type>', '框架类型')
    .option('-k, --kit <kit>', '框架预设')
    .action(async (_, options) => {
      start('正在启动生成');
      const { _optionValues } = options;
      const { type, kit } = _optionValues;
      await commandExceptionProcess(
        async () => {
          if (!type) throw new Error('type is required!');
          if (!kit) throw new Error('kit is required!');
          // todo: 生成代码
          success('框架代码生成成功');
        },
        async () => {
          fail('框架代码生成失败');
        },
      );
    })
    .addHelpText(
      'after',
      `
Examples:
  $ ti create -t <type> -k <kit>
  $ ti create -t fe -k umi-starter|umi-pwa: 生成前端框架代码
  $ ti create -t be -k ...: 生成后端框架代码

        `,
    )
    .showHelpAfterError();
}
