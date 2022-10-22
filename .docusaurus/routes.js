import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '82a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '942'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5f9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '11c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b7f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '794'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'a58'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '125'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '72b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Entities',
        component: ComponentCreator('/Entities', '1b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/EPNS-Push',
        component: ComponentCreator('/EPNS-Push', '91c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Helpful Resources',
        component: ComponentCreator('/Helpful Resources', '985'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Local Graph Node',
        component: ComponentCreator('/Local Graph Node', '630'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Queries',
        component: ComponentCreator('/Queries', '1e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
