import Card from "./Card"
import { useEffect, useState } from "react";

const Article = ({topArticles}) => {
    const [displayArticles, setDisplayArticles] = useState(null);

 useEffect(() => {
    if (topArticles) {
        let result = topArticles.map(article => <Card article={article}/>) 
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