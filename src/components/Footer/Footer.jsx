import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import "./Footer.scss"

// const FooterLinks = ({ data }) => (
//   <Footer>
//     <nav>
//       {data.allMarkdownRemark.edges.map(link => {
//         console.log(link.node.frontmatter.title);
//         <Link to={link.node.fields.slug}>
//           {link.node.frontmatter.title}
//         </Link>
//       })}
//     </nav>
//   </Footer>
// )

export default () => (
  <StaticQuery
    query={graphql`
      query FooterMenuQuery { 
        allMarkdownRemark(
          sort: {fields: [fields___sort], order: ASC}, 
          filter: {fields: { isActive: { eq: true} , onFooterMenu: {eq: true}}}
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        <nav>
          {data.allMarkdownRemark.edges.map((link, i) => 
            <Link to={link.node.fields.slug} key={i}>
              {link.node.frontmatter.title}
            </Link>
          )}
        </nav>
      </footer>
    )}
  />
)

// Footer.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }