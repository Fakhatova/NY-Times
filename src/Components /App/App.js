import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Article from '../Article/Article';
import { useEffect, useState } from "react";
import { nyTimesData } from "../../API/ApiCalls";
import { useQuery, useQueries} from "react-query";
import {Route, Routes} from 'react-router-dom';


const  App = () => {
  const [topArticles, setTopArticles] = useState()
  const [category, setCategory] = useState('home')


  const useQueryParams = {
    keepPreviousData: true,
    refetchWindowFocus: false,
    refetchOnMount: false,
    staleTime:200000,
  }

                        ///// QUERY ///////

  // const { isLoading, error, data, isFetching, refetch} = useQuery("HomeData", () => nyTimesData.fetchCategory(category), useQueryParams)

  // useEffect(() => {
  //   console.log(data);
  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  // if(!isFetching) return setTopArticles(data.results)

  // }, [data, isLoading,error, isFetching])

  const updateCategory = (value) => {
    console.log(value);
    // setCategory(value)
  }

  const handleClick = (val) => {
    console.log(val);
    setCategory(val)
  }
 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <>
        <NavBar setTopArticles={setTopArticles} handleClick={handleClick} category={category} /> 
          
        <Article topArticles={topArticles} /> 
        <Footer />
        </>
      }/>
      </Routes>
    </div>
  );
}

export default App;
