import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

interface SeoProps {
  title?: string;
  description?: string;
}

const SEO: FC<SeoProps> = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { title: defaultTitle, description: defaultDescription },
    },
  } = useStaticQuery<Queries.CustomSiteSiteMetadataQuery>(graphql`
    query CustomSiteSiteMetadata {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </>
  );
};

export default SEO;
