import React from "react"
import Search from '../components/Search';

export default ({ data }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
          <li><a href={node.frontmatter.path}>{node.frontmatter.title}</a></li>
        )}
      </ul>

      <Search
          data={ data.siteSearchIndex }
          onSearch={hits =>
            this.setState({
              hits,
            })
          }
        />
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
    siteSearchIndex {
      index
    }
  }
`
