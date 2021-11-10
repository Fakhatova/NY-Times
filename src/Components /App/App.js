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

  const { isLoading, error, data, isFetching } = useQuery("HomeData", () =>  nyTimesData.fetchAlldata())
  const [category, setCategory] = useState(null)
  const results = useQueries([
    { queryKey: ['HomeData', 1], queryFn: nyTimesData.fetchAlldata() },
    { queryKey: ['Category', 2], queryFn: nyTimesData.fetchCategory(category) },
  ])

  useEffect(() => {
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if(!isFetching) return setTopArticles(data.results)

  }, [data, isLoading,error, isFetching])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <>
        <NavBar category={setCategory} />
        <Article topArticles={topArticles} /> 
        <Footer />
        </>
      }/>
      </Routes>
    </div>
  );
}

export default App;
