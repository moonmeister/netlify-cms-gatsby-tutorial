import React from "react"

export default ({ data }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
          <li><a href={node.frontmatter.path}>{node.frontmatter.title}</a></li>
        )}
      </ul>
  </div>
  )
}


export const query = graphql`
  query MyPagesQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
