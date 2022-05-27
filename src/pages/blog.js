import React from 'react'
import { graphql, Link } from 'gatsby'
import './blog.css'

function Blog ({ data }) {
  const content = data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
		<div key={id}>
			<Link to={`/${slug}`}>
				<h3>{frontmatter.title}</h3>
			</Link>
		</div>
  ))
  return (
		<article id='blog'>
			{content}
		</article>
  )
}

export default Blog

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`
