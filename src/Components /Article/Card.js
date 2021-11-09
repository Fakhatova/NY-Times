

const Card = ({article}) => {
    return (
        <section>
        <article className='title-container'>
                <h2 className='article-title'>
                    {article.title}
                </h2>
                <p className='article-intro'>
                    {article.abstract}
                </p>
            </article>
            <article className='image-container'>
            <img src={article.multimedia[0].url} alt={article.multimedia[0].type}/>
            </article>
        </section>
    )
}

export default Card;