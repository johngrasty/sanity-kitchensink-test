export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec688c1aef97a5bb62f2c8a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchensink-test-studio',
                  apiId: '2bbc7022-23ae-4164-a609-2e19f7fc820d'
                },
                {
                  buildHookId: '5ec688c1e09ff58f0234a4a9',
                  title: 'Blog Website',
                  name: 'sanity-kitchensink-test',
                  apiId: 'fce466e2-1d02-4aad-852e-6adaed22d0fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johngrasty/sanity-kitchensink-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchensink-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
