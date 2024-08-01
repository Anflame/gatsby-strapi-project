import React, { FC, ReactNode } from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface NewsCardProps {
  title: string;
  image: IGatsbyImageData;
}

const NewsCard: FC<NewsCardProps> = ({ image, title }) => (
  <li style={{ maxHeight: 200, boxShadow: "0 0 4px gray", padding: "1rem", marginTop: "1.5rem" }}>
    <article>
      <GatsbyImage alt={title} image={image} style={{ width: 200, aspectRatio: "1/0.5" }} />
      <h3>{title}</h3>
    </article>
  </li>
);

export default NewsCard;
