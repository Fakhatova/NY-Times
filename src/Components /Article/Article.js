import Card from "./Card"
import { useEffect, useState } from "react";
import { v4 as uuid_v4 } from "uuid";

const Article = ({topArticles}) => {
    const [displayArticles, setDisplayArticles] = useState(null);
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
    if (topArticles) {
        let titleResult = topArticles.map(article =>
            <section key={uuid_v4()}>
                <h2>{article.title}</h2>
                <img src={article.multimedia[0].url} alt='image'/>
            </section>
            )

        let result = topArticles.map(article => <Card key={uuid_v4()} article={article}/>) 
        setTitle(titleResult)
        setDisplayArticles(result)
    }   
    }, [topArticles])
    

    return (
        <main className='article-container'>
            {title}
            {/* {image} */}
            {/* {displayArticles} */}
        </main>
    )
}

export default Article;