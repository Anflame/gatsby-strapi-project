import React, { FC } from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { News } from "../components/News";

const SingleNews: FC<PageProps<Queries.NewsQuery>> = ({ data }) => {
  const {
    strapiNews: { created, cover, content, id, title },
  } = data || {};

  const coverImage = cover[0].localFile.childrenImageSharp?.[0]?.gatsbyImageData;

  if (!coverImage || !content || !title || !created) return <>Loading...</>;

  return (
    <Layout>
      <News image={coverImage} content={content} title={title} created={created} />
    </Layout>
  );
};

export const query = graphql`
  query News($id: String) {
    strapiNews(id: { eq: $id }) {
      id
      title
      content
      created
      cover {
        localFile {
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;

export default SingleNews;
