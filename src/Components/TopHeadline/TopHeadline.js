import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=81fdb40ab756421e9d4e34a2aac4d273')
        .then(res => res.json())
        .then(data => {
            setArticles(data.articles);
        })
    }, []);

    return (
            <div>
                <h1 className="text-center">Top headlines: {articles.length}</h1>
                <div className="row d-flex justify-content-center" >
                    {
                        articles.map(article => <News article={article}></News>)
                    }
                </div>
            </div>
    );
};

export default TopHeadline;