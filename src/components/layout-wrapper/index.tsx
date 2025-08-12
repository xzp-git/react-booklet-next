'use client';
import React, {Suspense, useCallback} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {usePathname, useRouter} from 'next/navigation';
import {Layout, Menu, theme} from 'antd';

import routes from '@/routes';
const {Content, Sider} = Layout;

export default function LayoutWrapper({children}: {children: React.ReactNode}) {
  const {
    token: {colorBgContainer, borderRadiusLG}
  } = theme.useToken();

  const router = useRouter();
  const pathname = usePathname();

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
          onClick={handleClick}
          selectedKeys={[pathname]}
          items={routes
            .filter((route) => !route.hideInMenu)
            .map(({path, title}) => ({
              key: path,
              label: title
            }))}
        />
      </Sider>
      <Layout>
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      </Layout>
    </Layout>
  );
}
