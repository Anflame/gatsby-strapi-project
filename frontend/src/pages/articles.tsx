import React, { FC } from "react";
import Layout from "../components/Layout";
import { graphql, Link, PageProps } from "gatsby";
import NewsCard from "../components/News/NewsCard";
import category from "../templates/category";
import { ArticleItem } from "../components/Aricle";

const Articles: FC<PageProps<Queries.AllArticlesQuery>> = ({ data }) => {
  const {
    allStrapiArticle: { nodes },
  } = data;
  return (
    <Layout>
      <li style={{ listStyleType: "none" }}>
        {nodes.map(({ title, author, category, content, created }) => {
          if (!title || !author?.name || !created || !content) return null;
          return (
            <ArticleItem
              title={title}
              created={created}
              content={content}
              author={author?.name}
              additionalInfo={<Link to={`../category/${category?.slug}`}>{category?.title}</Link>}
            />
          );
        })}
      </li>
    </Layout>
  );
};

export const query = graphql`
  query AllArticles {
    allStrapiArticle(sort: { created: DESC }) {
      nodes {
        author {
          name
        }
        category {
          slug
          title
        }
        content
        created
        title
      }
    }
  }
`;

export default Articles;
