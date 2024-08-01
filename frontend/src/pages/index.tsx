import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import { CategoryCard } from "../components/Category";

const HomePage: FC<PageProps<Queries.AllCategoriesQuery>> = ({ data }) => {
  const {
    allStrapiCategory: { nodes },
  } = data;

  return (
    <Layout>
      <ul style={{ listStyleType: "none", display: "flex", gap: "2rem" }}>
        {nodes.map(({ slug, title, subtitle, ...item }) => {
          if (!slug || !title || !subtitle) return null;
          const { cover } = item || {};

          const image = cover?.[0]?.localFile?.childrenImageSharp?.[0]?.gatsbyImageData;

          if (!image) return null;

          return <CategoryCard image={image} title={title} subtitle={subtitle} slug={slug} />;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query AllCategories {
    allStrapiCategory {
      nodes {
        slug
        subtitle
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

export default HomePage;
