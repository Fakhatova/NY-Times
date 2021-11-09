import Card from "./Card"
import { useEffect, useState } from "react";
import { v4 as uuid_v4 } from "uuid";

const Article = ({topArticles}) => {
    const [displayArticles, setDisplayArticles] = useState(null);

    useEffect(() => {
    if (topArticles) {
        let result = topArticles.map(article => <Card key={uuid_v4()} article={article}/>) 
        setDisplayArticles(result)
    }   
    }, [topArticles])
    

    return (
        <main className='article-container'>
            {displayArticles}
        </main>
    )
}

export default Article;