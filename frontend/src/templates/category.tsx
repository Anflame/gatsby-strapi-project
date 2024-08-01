import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { ArticleItem } from "../components/Aricle";
import Layout from "../components/Layout";

const Category: FC<PageProps<Queries.CategoryArticlesQuery>> = ({ data }) => {
  const {
    allStrapiArticle: { nodes },
  } = data;
  return (
    <Layout>
      <ul style={{ listStyleType: "none" }}>
        {nodes.map(({ created, content, title, author }, index) => {
          if (!title || !created || !content || !author?.name) return;
          return <ArticleItem key={index} title={title} created={created} content={content} author={author.name} />;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query CategoryArticles($id: String) {
    allStrapiArticle(filter: { category: { id: { eq: $id } } }, sort: { created: DESC }) {
      nodes {
        created
        title
        content
        author {
          name
        }
      }
    }
  }
`;

export default Category;
