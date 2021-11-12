import Card from "./Card"
import { useEffect, useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import { Link } from "react-router-dom";

const Article = ({topArticles, setArticle}) => {
    const [title, setTitle] = useState(null)

    useEffect(() => {
    if (topArticles) {
        let titleResult = topArticles.map(article => 
            <Link key={uuid_v4()} className='singleCard' to='/article' 
            element={<Card key={uuid_v4()} article={article}/>} 
            onClick={() => setArticle(article)}> 
            <section key={uuid_v4()} className='intro-card'>
                <h2 className='intro-title'>{article.title}</h2>
                {article && article.multimedia &&  <img className='intro-image' src={article.multimedia[0].url} alt={article.multimedia[0].format}/> }
            </section>
            </Link>
            )
        setTitle(titleResult)
    }   
    }, [topArticles,setArticle])
    

    return (
        <main className='article-container'>
            {title}
        </main>
    )
}

export default Article;