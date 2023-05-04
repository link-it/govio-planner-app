import { INavData } from './gp-sidebar-nav';

export const navItemsMainMenu: INavData[] = [
  {
    title: true,
    label: 'APP.MENU.Dashboard',
    path: 'dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    permission: 'DASHBOARD',
    attributes: { disabled: false }
  },
  {
    title: true,
    label: 'APP.MENU.ExpirationFiles',
    path: 'expiration-files',
    url: '/expiration-files',
    icon: 'topic',
    permission: 'FILES',
    attributes: { disabled: false }
  },
  {
    title: true,
    label: 'APP.MENU.GovioFiles',
    path: 'govio-files',
    url: '/govio-files',
    iconBs: 'receipt',
    permission: 'FILES',
    attributes: { disabled: false }
  }
];
