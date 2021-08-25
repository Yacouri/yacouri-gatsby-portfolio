import React from "react";
import { Link } from "gatsby";
import { ArticleCard } from "./style";
import { colors } from "../../global/colors";

const Article = ({ img, title, date, readingTime, url }) => {
  return (
    <Link to={url} style={{textDecoration: 'none', color: colors.black}}>
      <ArticleCard>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <span>{date}</span>
          <span>{readingTime}</span>
        </div>
      </ArticleCard>
    </Link>
  );
};

export default Article;
