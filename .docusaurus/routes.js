import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '125'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '8f1'),
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
