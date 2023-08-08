

import React, { useState, useEffect } from "react";
import NewsCard from "../../pages/MainPage/NewsCard";


function LoadNews(props) {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {

        const searchParams = new URLSearchParams({
            language: 'en',
            keywords: props.newsUrl,
            page_size: 30,
            page_number: 1,
            apiKey: 'f-caV_JMhYUNqeX2uLz4jS5YVprBHbmYQzB379HaDdINxvGZ',
        });

        fetch(`https://api.currentsapi.services/v1/search?${searchParams.toString()}`)
            .then((response) => response.json())
            .then((data) => {
                setNewsData(data["news"]);
            });
    }, [props.newsUrl]);

    console.log(newsData)

    const newsItems = newsData.map((item) => {

        return (
            <NewsCard
                key={item.id}
                imageUrl={item.image}
                title={item.title}
                description={item.description}
            />
        );
    });

    return newsItems
}

export default LoadNews;
