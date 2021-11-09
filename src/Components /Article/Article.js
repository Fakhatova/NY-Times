import { useEffect, useState } from "react";
import { nyTimesData } from "../../API/ApiCalls";
import { useQuery } from "react-query";

const Article = () => {
    const [topArticles, setTopArticles] = useState(null)

    const { isLoading, error, data, isFetching } = useQuery("HomeData", () =>  nyTimesData.fetchAlldata())

    useEffect(() => {
    
    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

        setTopArticles(data.results)

    }, [])

    return (
        <main className='article-container'>
            <article className='title-container'>
                <h2 className='article-title'>
                Article title 
                </h2>
            </article>
            <article className='image-container'>

            </article>
        </main>
    )
}

export default Article;