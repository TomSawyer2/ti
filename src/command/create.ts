import { Command } from 'commander';
import { commandExceptionProcess } from '../util/exception-process';
import { fail, log, start, success } from '../util/log';
import { FrontEndKit, Type } from '../typings';
import { createFeProject } from '../create/fe';

export function initCreate(program: Command): void {
  program
    .command('create')
    .description('生成前后端框架代码')
    .alias('c')
    .option('-t, --type <type>', '框架类型')
    .option('-k, --kit <kit>', '框架预设')
    .option('-n, --name <name>', '项目名称')
    .action(async (_, options) => {
      const { _optionValues } = options;
      const { type, kit, name }: { type: Type; kit: FrontEndKit; name: string } = _optionValues;
      start('正在启动生成');
      await commandExceptionProcess(
        async () => {
          if (!type) throw new Error('type is required!');
          if (!kit) throw new Error('kit is required!');
          if (!name) throw new Error('name is required!');
          log(`开始生成 ${name} 项目，使用 ${type} ${kit} 框架`);
          switch (type) {
            case Type.fe:
              createFeProject(kit, {
                name,
              });
              break;
            case Type.be:
              // todo
              break;
            default:
              break;
          }
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
  $ ti create -t <type> -k <kit> -n <name>
  $ ti create -t fe -k umi-starter|umi-pwa name: 生成前端框架代码
  $ ti create -t be -k ...: 生成后端框架代码

        `,
    )
    .showHelpAfterError();
}
