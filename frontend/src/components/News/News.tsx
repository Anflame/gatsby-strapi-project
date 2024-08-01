import React, { FC } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface NewsProps {
  image: IGatsbyImageData;
  content: string;
  created: string;
  title: string;
}

const News: FC<NewsProps> = ({ title, image, content, created }) => (
  <article style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <h3>{title}</h3>
    <GatsbyImage image={image} alt={title} style={{ width: 250, aspectRatio: "1.5/1", marginBottom: "1.5rem" }} />
    <p style={{ clear: "both" }}>{content}</p>
    <time style={{ clear: "both", alignSelf: "flex-end", justifySelf: "flex-end" }}>{created}</time>
  </article>
);

export default News;
