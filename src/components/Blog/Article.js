import React from "react";
import { Link } from "gatsby";
import { ArticleCard } from "./style";

const Article = ({ img, title, date, readingTime, url }) => {
  return (
    <ArticleCard>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <span>{date}</span>
        <span>{readingTime}</span>
        <div className="blog-url-wrapper">
          <Link to={url}>Read</Link>
        </div>
      </div>
    </ArticleCard>
  );
};

export default Article;
