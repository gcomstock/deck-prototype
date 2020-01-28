export const navSingleApp = [
  {
    headerName: 'Delivery',
    headerIcon: 'navDelivery',
    children: [
      {
        name: 'builds',
        to: '',
        count: 320
      },
      {
        name: 'environments',
        to: '',
        count: 1234
      },
      {
        name: 'pipelines',
        to: '',
        count: ''
      },
      {
        name: 'tasks',
        to: '',
        count: ''
      }
    ]
  },
  {
    headerName: 'Resources',
    headerIcon: 'navResources',
    children: [
      {
        name: 'clusters',
        to: '/applications/app/clusters',
        count: ''
      },
      {
        name: 'functions',
        to: '/applications/app/functions',
        count: ''
      },
      {
        name: 'fast properties',
        to: '',
        count: ''
      },
      {
        name: 'load balancers',
        to: '',
        count: ''
      },
      {
        name: 'security groups',
        to: '',
        count: ''
      }
    ]
  },
  {
    headerName: 'Health',
    headerIcon: 'navHealth',
    children: [
      {
        name: 'canary configs',
        to: '',
        count: ''
      },
      {
        name: 'canary reports',
        to: '',
        count: ''
      },
      {
        name: 'chap',
        to: '',
        count: ''
      },
      {
        name: 'campaigns',
        to: '',
        count: ''
      }
    ]
  },
  {
    headerName: 'App Settings',
    headerIcon: 'navSettings',
    children: [
      {
        name: 'templating',
        to: '',
        count: ''
      },
      {
        name: 'config',
        to: '',
        count: ''
      }
    ]
  }
];

export const navMultiApp = [
];

export const navNoApp = [
  {
    headerName: 'Resources',
    headerIcon: 'navResources',
    children: [
      {
        name: 'fast properties',
        to: '',
        count: ''
      }
    ]
  },
  {
    headerName: 'Health',
    headerIcon: 'navHealth',
    children: [
      {
        name: 'canary configs',
        to: '',
        count: ''
      },
      {
        name: 'campaigns',
        to: '',
        count: ''
      }
    ]
  },
  {
    headerName: 'App Settings',
    headerIcon: 'navSettings',
    children: [
      {
        name: 'templating',
        to: '',
        count: ''
      }
    ]
  }
];