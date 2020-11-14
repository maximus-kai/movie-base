import React from 'react'
import Article from "./Article"



function ArticleList({news}) {
    return (
        <div classname = "card">
        {
            news.map((res , index)=>{
                return <Article news = {news[index]}/>
            })
        }
        </div>
    )
}

export default ArticleList
