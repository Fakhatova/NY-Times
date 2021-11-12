
const Card = ({article}) => {
    const url = article.short_url
    return (
        <section>
            <article className='title-container'>
                <h2 className='article-title'>
                    {article.title}
                </h2>
                <div className='credit-warpper'>
                <p className ='byLine'>{article.byline}</p>
                <p className='publish'>Published: {article.published_date}</p>
                </div>
                <div className='absctract'>
                <p className='article-intro'>
                    {article.abstract}
                </p>
                </div>
                <button className='link'><a target="_blank" href={url} rel="noreferrer">Visit original source</a></button>
            </article>
            <article className='image-container'>
            {article && article.multimedia && <img src={article.multimedia[0].url} alt={article.multimedia[0].type}/>}
            <p className='copyrights'>Copyright: {article.multimedia[0].copyright}</p>
            </article>
        </section>
    )
}

export default Card;