
const Card = ({article}) => {
    const url = article.short_url
    return (
        <section>
            <article className='title-container'>
                <h2 className='article-title'>
                    {article.title}
                </h2>
                <p className ='byLine'>{article.byline}</p>
                <p className='publish'>{article.published_date}</p>
                <p className='article-intro'>
                    {article.abstract}
                </p>
                <button><a target="_blank" href={url}>View Article</a></button>
            </article>
            <article className='image-container'>
            {article && article.multimedia && <img src={article.multimedia[0].url} alt={article.multimedia[0].type}/>}
            </article>
        </section>
    )
}

export default Card;