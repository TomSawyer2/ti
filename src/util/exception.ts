import { error } from './log';

/**
 * 全局异常捕捉
 *
 * @exports
 * @param {*} callback
 * @param {*} errCallback
 */
export async function exception(callback: () => Promise<void>, errCallback?: () => Promise<void>): Promise<void> {
  try {
    await callback();
  } catch (err: any) {
    error(err);
    if (errCallback) await errCallback();
    setTimeout(() => {
      process.exit(-1);
    }, 100);
  }
}
