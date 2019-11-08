export const mockInfra = [
  {
    icon: 'cluster',
    title: 'app name',
    url: 'clusterDetail',
    version: null,
    build: null,
    statuses: [
      {
        icon: 'app-window',
        level: 'error'
      }
    ],
    children: [
      {
        icon: 'serverGroup',
        url: 'serverGroupDetail',
        title: 'cluster-name-cluster-name-cluster-name-cluster-name-cluster-name-cluster-name-cluster-name-cluster-name-cluster-name',
        version: null,
        build: null,
        statuses: [
          {
            icon: 'skull',
            level: 'error'
          }
        ],
        children: [

        ]
      },
      {
        icon: 'servergroup-aws',
        url: 'serverGroupDetail',
        title: 'cluster name',
        version: null,
        build: null,
        statuses: [
          {
            icon: 'skull',
            level: 'error'
          }
        ],
        children: [

        ]
      },
      {
        icon: 'serverGroup',
        url: 'serverGroupDetail',
        title: 'cluster name',
        version: null,
        build: null,
        statuses: [
          {
            icon: 'skull',
            level: 'error'
          }
        ],
        children: [
          {
            icon: 'serverGroup',
            url: 'serverGroupDetail',
            title: null,
            version: null,
            build: null,
            statuses: [
              {
                icon: 'skull',
                level: 'error'
              }
            ],
            children: [

            ]
          }
        ]
      }

    ]
  },

  {
    icon: 'cluster',
    title: 'app name',
    url: 'clusterDetail',
    version: null,
    build: null,
    statuses: [
      {
        icon: 'skull',
        level: 'error'
      }
    ],
    children: [
      {
        icon: 'serverGroup',
        url: 'serverGroupDetail',
        title: null,
        version: null,
        build: null,
        statuses: [
          {
            icon: 'skull',
            level: 'error'
          }
        ],
        children: [
        ]
      }

    ]
  }

];