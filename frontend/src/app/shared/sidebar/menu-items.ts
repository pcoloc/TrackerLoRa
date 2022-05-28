import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/gateways',
    title: 'Gateways',
    icon: 'bi bi-router',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/nodes',
    title: 'Nodes',
    icon: 'bi bi-diagram-2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/api',
    title: 'API',
    icon: 'bi bi-hdd-stack',
    class: '',
    extralink: false,
    submenu: []
  },
 {
    path: '/status',
    title: 'Status',
    icon: 'bi bi-dice-1',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  }
];
