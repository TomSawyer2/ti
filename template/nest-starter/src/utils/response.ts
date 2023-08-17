export const responseFormatter = (data: any, code = 0, message = '') => {
  return {
    code,
    data,
    message,
  };
};

export interface Response {
  code: number;
  data: any;
  message: string;
}
