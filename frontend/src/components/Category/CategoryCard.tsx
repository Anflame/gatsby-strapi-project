import React, { FC } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

export interface CategoryCardProps {
  image: IGatsbyImageData;
  title: string;
  slug: string;
  subtitle: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ title, image, subtitle, slug }) => {
  return (
    <li
      style={{
        width: "200px",
        aspectRatio: "1.5/0.8",
        boxShadow: "0 0 3px gray",
      }}
    >
      <Link to={`/category/${slug}`} style={{ width: "inherit", height: "inherit" }}>
        <figure
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <GatsbyImage alt={title} image={image} />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default CategoryCard;
