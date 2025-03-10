import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const BlogContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const BlogPost = styled.div`
  margin-bottom: 20px;
`;

const BlogPage = ({ data }) => (
  <BlogContainer>
    <h1>My Blog</h1>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <BlogPost key={node.id}>
        <h2>{node.title}</h2>
        <p>{node.body.body}</p>
      </BlogPost>
    ))}
  </BlogContainer>
);

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          body {
            body
          }
        }
      }
    }
  }
`;

export default BlogPage;
