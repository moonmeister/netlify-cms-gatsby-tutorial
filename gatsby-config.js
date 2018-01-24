module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/blog`,
      name: "markdown-pages",
      },
    },
    {
      resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ['title', 'content'],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.html,
          },
        },
      },
    },
  ],
}
