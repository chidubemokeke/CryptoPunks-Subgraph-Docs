import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '753'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '388'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e7e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '73d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f15'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ba5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '08f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '99c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '614'),
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
        path: '/Push Notifications',
        component: ComponentCreator('/Push Notifications', '27e'),
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
