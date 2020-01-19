import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"

const IndexWrapper = styled.main``

const PostWrapper = styled.div``

export default ({ data }) => {
  return (
    <IndexWrapper>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
        <PostWrapper key={id}>
          <Link to={fields.slug}>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </Link>
        </PostWrapper>
      ))}
    </IndexWrapper>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
