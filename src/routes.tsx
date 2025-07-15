export interface RouteConfig {
  path: string;
  title: string;
  icon?: string;
  requireAuth?: boolean;
  roles?: string[];
  children?: RouteConfig[];
  hideInMenu?: boolean;
  order?: number;
}

export const routes: RouteConfig[] = [
  {path: '/controllable', title: '受控与非受控'},
  {path: '/use-interval', title: '定时器'},
  {path: '/mini-calendar', title: 'Mini日历组件'},
  {path: '/todo-list', title: 'Todo List'}
];

export default routes;
