import { useEffect } from "react";
import { nyTimesData } from "../../API/ApiCalls";


const Article = () => {


    useEffect(() => {
        nyTimesData.fetchAlldata().then(data => console.log(data))
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