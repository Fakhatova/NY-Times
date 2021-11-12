import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Article from '../Article/Article';
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Card from '../Article/Card';
import { v4 as uuid_v4 } from "uuid";

const  App = () => {
  const [topArticles, setTopArticles] = useState()
  const [article, setArticle]= useState()
  const [category, setCategory] = useState('home')
  const copyright = 'Copyright (c) 2021 The New York Times Company. All Rights Reserved.'

  const handleClick = (val) => {
    setCategory(val)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <>
        <NavBar setTopArticles={setTopArticles} handleClick={handleClick} category={category} /> 
        <Article topArticles={topArticles} setArticle={setArticle}/> 
        <Footer copyRights={copyright}/>
        </>
      }/>
      <Route path='/article' element={<Card key={uuid_v4()} article={article} />}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
