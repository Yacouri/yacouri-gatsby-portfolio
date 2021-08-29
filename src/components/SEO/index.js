import React from "react";
import Helmet from "react-helmet";

export const SEO = ({ title, author, description, media, logo }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta
        name="image"
        content={logo}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={logo}
      />
      <meta property="fb:app_id" content={media.facebook} />
      <meta name="twitter:creator" content={media.twitter} />
      <meta name="twitter:site" content={media.twitter} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image:src"
        content={logo}
      />
      <meta name="author" content={author} data-react-helmet="true" />
      <title>{`Yacouri | ${title}`}</title>
      <html lang="en" />
    </Helmet>
  );
};
