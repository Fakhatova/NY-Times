import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Article from '../Article/Article';
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';

const  App = () => {
  const [topArticles, setTopArticles] = useState()
  const [category, setCategory] = useState('home')

  const handleClick = (val) => {
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
