

const Card = ({article}) => {
    return (
        <>
        <article className='title-container'>
                <h2 className='article-title'>
                {article.title}
                </h2>
            </article>
            <article className='image-container'>
            <img src={article.multimedia[0].url} alt={article.multimedia[0].type}/>
            </article>
        </>
    )
}

export default Card;