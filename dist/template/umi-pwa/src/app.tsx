import { ConfigProvider } from 'antd';
import { history } from 'umi';
import React from 'react';

export function rootContainer(container: any) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      {container}
    </ConfigProvider>
  );
}
