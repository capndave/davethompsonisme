import { graphql, Link } from 'gatsby'
import React from 'react'
import './blog.css'

function Blog ({ data }) {
  return (
		<article>
			{data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
				<div>
					<Link to={`/${slug}`}>
						<h3>{frontmatter.title}</h3>
						<p>{frontmatter.date}</p>
						<p>{excerpt}</p>
					</Link>
				</div>
			))}
		</article>
  )
}

export default Blog

export const query = graphql`
					query SITE_INDEX_QUERY {
						allMdx(sort: {fields: [frontmatter___date], order: DESC }) {
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
