import React, { FC } from "react";
import { Link, PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import NewsCard from "../components/News/NewsCard";

const NewsPage: FC<PageProps<Queries.AllNewsQuery>> = ({ data }) => {
  if (!data) return <>Loading...</>;

  return (
    <Layout>
      <section>
        <ul style={{ listStyleType: "none" }}>
          {data?.allStrapiNews.nodes?.map(({ slug, id, title, cover }) => {
            if (!title || !slug) return;

            const image = cover?.[0]?.localFile?.childrenImageSharp?.[0]?.gatsbyImageData;
            if (!image) return;

            return (
              <Link to={slug}>
                <NewsCard title={title} image={image} />
              </Link>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AllNews {
    allStrapiNews(sort: { created: DESC }) {
      nodes {
        id
        slug
        title
        cover {
          localFile {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default NewsPage;
