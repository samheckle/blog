import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Categories" />
      <Bio />

      <Link to="/absurd">Designing the Absurd</Link>

      <hr margin="2px"></hr>
      <Link to="/blessed">Blessed/Blursed/Cursed</Link>
      <Link to="/collective-play">Collective Play</Link>
      <Link to="/material-of-language">Material Of Language</Link>
      <Link to="/religious-robots">Religious Robots</Link>

      <hr margin="2px"></hr>
      <Link to="/general">General</Link>
      <Link to="/physical-computing">Physical Computing</Link>
      <Link to="/visual-language">Visual Language</Link>
      <Link to="/animation">Animation</Link>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
