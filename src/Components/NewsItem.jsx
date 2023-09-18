import React from "react";

const NewsItem = ({article}) => {
    return (
        <li><a href={article.webUrl} target="_blank">{article.webTitle}</a></li>
    )
}

export default NewsItem