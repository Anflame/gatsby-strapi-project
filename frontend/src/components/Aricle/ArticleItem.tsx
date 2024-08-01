import React, { FC, ReactNode } from "react";

interface ArticleItemProps {
  title: string;
  author: string;
  created: string;
  content: string;
  additionalInfo?: ReactNode;
}

const ArticleItem: FC<ArticleItemProps> = ({ content, title, created, author, additionalInfo }) => {
  return (
    <li style={{ marginTop: "2rem" }}>
      <article style={{ padding: "1rem", boxShadow: "0 0 0 3px rgba(0,0,0,0.05)" }}>
        <h3>{title}</h3>
        <h5 style={{ color: "gray" }}>{author}</h5>
        <p>{content}</p>
        <time style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>{created}</time>
        {additionalInfo}
      </article>
    </li>
  );
};

export default ArticleItem;
