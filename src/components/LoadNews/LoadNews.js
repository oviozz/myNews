
import React, { useState, useEffect } from "react";
import NewsCard from "../../pages/MainPage/NewsCard";
import Loading from "./Loading";

function LoadNews(props) {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                if (data.length <= 0 && props.home) {
                    setNewsData([]);
                } else {
                    setNewsData(data["news"]);
                }
                setIsLoading(false);
            });
    }, [props.newsUrl, props.home]);

    if (isLoading) {
        return <Loading />
    }

    if (newsData.length === 0 && props.home) {
        return (
            <div className={"allnews--container"}>
                <div className={"error-message"}>
                    <h1 className={"nodata top-msg"}>"{props.newsUrl}"</h1>
                    <h1 className={"nodata"}>No Result Found!</h1>
                </div>

            </div>
        );
    }

    const newsItems = newsData.map((item) => (
        <NewsCard
            key={item.id}
            imageUrl={item.image}
            title={item.title}
            description={item.description}
            url={item.url}
        />
    ));

    return newsItems;
}

export default LoadNews;
