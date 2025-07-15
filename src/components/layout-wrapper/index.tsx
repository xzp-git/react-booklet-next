'use client';
import React, {Suspense, useCallback} from 'react';
import {useRouter} from 'next/navigation';
import {Layout, Menu, theme} from 'antd';

import routes from '@/routes';
const {Content, Sider} = Layout;

export default function LayoutWrapper({children}: {children: React.ReactNode}) {
  const {
    token: {colorBgContainer, borderRadiusLG}
  } = theme.useToken();

  const router = useRouter();

  // 用 key 做路由跳转
  const handleClick = useCallback(
    ({key}: {key: string}) => {
      router.push(key);
    },
    [router]
  );

  return (
    <Layout className="h-screen">
      <Sider collapsible>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/controllable']}
          onClick={handleClick}
          items={routes
            .filter((route) => !route.hideInMenu)
            .map(({path, title}) => ({
              key: path,
              label: title
            }))}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Suspense fallback={<div>加载中...</div>}>{children}</Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}
