export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f799e536840273e1eceae40',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r7fw7w3b',
                  apiId: 'f4d0789a-b166-4dff-bc6c-d79bd83e9986'
                },
                {
                  buildHookId: '5f799e53b4d768df6577a7a3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-euqsoo9e',
                  apiId: 'dbf64c9e-d9ca-419f-8c21-9b8eb81d8938'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChaseWNorton/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-euqsoo9e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
