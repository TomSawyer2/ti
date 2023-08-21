import chalk from 'chalk';

/**
 *
 * @param {number} input
 * @param {number} minWidth
 * @return {string}
 */
const minWidthStr = (input: number, minWidth: number): string => {
  const str = input.toString();
  return str.length >= minWidth ? str : new Array(minWidth - str.length).fill(0).join('') + str;
};

const dateString = (): string => {
  const cur = new Date();
  return chalk.grey(
    `${minWidthStr(cur.getHours(), 2)}:${minWidthStr(cur.getMinutes(), 2)}:${minWidthStr(cur.getSeconds(), 2)}.${minWidthStr(
      cur.getMilliseconds(),
      3,
    )}`,
  );
};

export function start(message: string, detail?: string): void {
  console.log(dateString(), `🚀 ${chalk.blue(message)}`, detail || '');
}

export function status(message: string, detail?: string): void {
  console.log(dateString(), `${chalk.bgBlue('✧')} ${chalk.blue(message)}`, detail || '');
}

export function success(message: string, detail?: string): void {
  console.log(dateString(), `✅ ${chalk.green(message)}`, detail || '');
}

export function fail(message: string, detail?: string): void {
  console.log(dateString(), `❌ ${chalk.red(message)}`, detail || '');
}

export function error(...message: Array<string>): void {
  console.error(dateString(), ...message.map(i => chalk.red(i)));
}

export function warn(...message: Array<string>): void {
  console.warn(dateString(), ...message.map(i => chalk.yellow(i)));
}

export function log(...message: Array<string>): void {
  console.log(dateString(), ...message);
}

export function info(...message: Array<string>): void {
  console.info(dateString(), ...message.map(i => chalk.italic(i)));
}

export function formatDate(date: Date, format = 'yyyy-MM-dd hh:mm:ss'): string {
  let fmt = format;
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
    }
  }
  return fmt;
}
