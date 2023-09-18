import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({news}) => {
    const newsNodes = news.map((article, index) => {
        return <NewsItem article={article} key={index}/>
    })

    return (
        <ul>
        {newsNodes}
        </ul>
    )
}

export default NewsList