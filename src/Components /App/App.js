import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Article from '../Article/Article';
import { useEffect, useState } from "react";
import { nyTimesData } from "../../API/ApiCalls";
import { useQuery } from "react-query";


const  App = () => {
  const [topArticles, setTopArticles] = useState()

  const { isLoading, error, data, isFetching } = useQuery("HomeData", () =>  nyTimesData.fetchAlldata())

  useEffect(() => {
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if(!isFetching) return setTopArticles(data.results)

  }, [data, isLoading,error])


  return (
    <div className="App">
      <NavBar/>
      <Article topArticles={topArticles} />
      <Footer/>
    </div>
  );
}

export default App;
