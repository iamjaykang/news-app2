import React, { useEffect, useState } from "react";
import { NewsSource } from "./api/NewsSource";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NewsContent } from "./components/NewsContent/NewsContent";

function App() {
  const [category, setCategory] = useState("news");
  const [newsArray, setNewsArray] = useState([]);

  const newsApi = async () => {
    try {
      const news = await NewsSource.get(
        `/latest_headlines?countries=NZ&topic=${category}&page_size=30`, {
          headers: {
              'x-api-key': `${process.env.REACT_APP_NEWS_CATCHER_API_KEY}`
          }
        }
      );
      setNewsArray(news.data.articles);
      console.log(newsArray);
    } catch (error) {
      console.log(error);
    }
  };

  const current = new Date();
  const date = `${current.toLocaleString("en-NZ", {
    month: "long",
  })} ${current.getDate()} ${current.getFullYear()}`;

  //useeffect fires only when news results change or category changes
  useEffect(() => {
    newsApi();
  }, [category]);

  return (
    <div className="App">
      <Header setCategory={setCategory} category={category} index={0} />
      {newsArray && (
        <NewsContent newsArray={newsArray} category={category} date={date} />
      )}
      <Footer />
    </div>
  );
}

export default App;
