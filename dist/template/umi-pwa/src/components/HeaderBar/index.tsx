import React, { useContext, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { history } from 'umi';

import './index.less';

const HeaderBar: React.FC = () => {
  const [currentKey, setCurrentKey] = useState<string>('1');

  const handleMenuClick = (e: { key: string }) => {
    const { key } = e;
    setCurrentKey(key);
    switch (key) {
      case '1':
        history.push('/route1');
        break;
      case '2':
        history.push('/route2');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/route1') {
      setCurrentKey('1');
    } else if (path === '/route2') {
      setCurrentKey('2');
    }
  }, [window.location.pathname]);

  return (
    <div className="navbar">
      <div className="navbar-box">
        <span className="navbar-title">{{ @ti.inject="name" }}</span>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentKey]}
          className="navbar-menu"
          items={[
            {
              key: '1',
              label: 'Item1',
            },
            {
              key: '2',
              label: 'Item2',
            }
          ]}
          onClick={(e) => handleMenuClick(e)}
        />
      </div>
    </div>
  );
};

export default HeaderBar;
