import './NavBar.css'
import { v4 as uuid_v4 } from "uuid";
import { useEffect, useState } from "react";
import { nyTimesData } from "../../API/ApiCalls";
import { useQuery, useQueries} from "react-query";

const fetchCategory = async (category) => {
   const categoryData = await nyTimesData.fetchCategory(category.queryKey[0])
   return categoryData;
}

const NavBar = ({ setTopArticles, handleClick, category}) => {
    const useQueryParams = {
        keepPreviousData: true,
        refetchWindowFocus: false,
        refetchOnMount: false,
        staleTime:200000,
      }
// const [category, setCategory] = useState('home')
    // const { isLoading, error, data, isFetching, refetch} = useQuery("HomeData", () => nyTimesData.fetchCategory(category), useQueryParams)
    const { isLoading, error, data, isFetching, refetch} = useQuery(category, fetchCategory, useQueryParams)


    useEffect(() => {
      if (isLoading) return "Loading...";
    
      if (error) return "An error has occurred: " + error.message;
    
      if(!isFetching && data) return setTopArticles(data.results)
      
    }, [data, isLoading,error, isFetching, category])


        const categories = [
            'arts', 'books', 'business', 
            'health',  'magazine', 'movies',
            'opinion', 'politics', 'realestate',
            'sports', 'sundayreview', 'technology', 't-magazine', 'travel', 'world'
        ]
        
        /// TRIGERRING CLICK AND SETTING NEW CATEGORY AND REFETCHING /////
        // const handleClick = (e) => {
        //     console.log(e.target.name);
        //     setCategory(e.target.name)
        //     // setCategory(e.target.name)
        //     // updateCategory(e.target.name)
        //     // refetch()
        // }

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