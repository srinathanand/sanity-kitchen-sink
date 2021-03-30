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
                  buildHookId: '6062754e471f3a0089c1e48a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qdfu8y6u',
                  apiId: 'bdbd27d4-672d-4607-bb72-f29cb1bdfd0e'
                },
                {
                  buildHookId: '6062754f60650d0c53509a8b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cbp697q1',
                  apiId: '658e5b6b-ae84-4761-b2d3-311b3ec2a72c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srinathanand/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cbp697q1.netlify.app', category: 'apps'}
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
