import { GatsbyNode } from "gatsby";
import path from "node:path";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `type CustomSiteSiteMetadataQuery { site: Site! } `,
    `type Site { siteMetadata: SiteMedata! }`,
    `type SiteMedata { title: String!, description: String! }`,
    `type NewsQuery { strapiNews: StrapiNews! }`,
    `type StrapiNews implements Node {
      content: String!,
      id: String!,
      title: String!,
      created: String!,
      cover: [LocalFile!]!
    }
    `,
    `type LocalFile { localFile: File! }`,
  ];

  createTypes(typeDefs);
};

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newsTemplate = path.resolve(`./src/templates/single-news.tsx`);
  const categoryTemplate = path.resolve(`./src/templates/category.tsx`);

  const news = await graphql<Queries.AllNewsForTemplateQuery>(`
    query AllNewsForTemplate {
      allStrapiNews {
        nodes {
          slug
          id
          title
        }
      }
    }
  `);

  news.data?.allStrapiNews?.nodes.forEach(({ slug, id }) =>
    createPage({
      path: `/news/${slug}`,
      component: newsTemplate,
      context: {
        id,
      },
    }),
  );

  const categories = await graphql<Queries.AllCategoriesTemplateQuery>(`
    query AllCategoriesTemplate {
      allStrapiCategory {
        nodes {
          id
          slug
          subtitle
          title
        }
      }
    }
  `);

  categories.data?.allStrapiCategory.nodes.forEach(({ slug, id }) =>
    createPage({
      path: `/category/${slug}`,
      component: categoryTemplate,
      context: {
        id,
      },
    }),
  );
};
