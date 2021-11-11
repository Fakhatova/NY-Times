import './NavBar.css'
import { v4 as uuid_v4 } from "uuid";
import { useEffect} from "react";
import { nyTimesData } from "../../API/ApiCalls";
import { useQuery} from "react-query";

const fetchCategory = async (category) => {
const categoryData = await nyTimesData.fetchCategory(category.queryKey[0])
return categoryData;
}

const NavBar = ({ setTopArticles, handleClick, category, setCopyRight}) => {

    const useQueryParams = {
        keepPreviousData: true,
        refetchWindowFocus: false,
        refetchOnMount: false,
        staleTime:200000,
    }

    const { isLoading, error, data, isFetching} = useQuery(category, fetchCategory, useQueryParams)


    useEffect(() => {
    if (isLoading) return "Loading...";
    
    if (error) return "An error has occurred: " + error.message;
    
    if(!isFetching && data) return setTopArticles(data.results)

    setCopyRight(data.copyright)
    
    }, [data, isLoading,error, isFetching, category,setTopArticles, setCopyRight])


        const categories = [
            'arts', 'books', 'business', 
            'health', 'movies',
            'opinion', 'politics', 'realestate',
            'sports', 'technology', 't-magazine', 'travel', 'world'
        ]

        let buttons = categories.map(category => <button name={category} key={uuid_v4()} onClick={e => handleClick(e.target.name)}>{category.toUpperCase()}</button>)
        
    return (
        <header className='header'>
            <nav className='navigation'>
                <h1 className='title'>The New York Times</h1>
                <div className='category-container'>
                {buttons}
                </div>
            </nav>
        </header>
    )
}

export default NavBar;