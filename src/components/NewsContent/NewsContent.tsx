import React from "react";
import { NewsCard } from "../NewsCard/NewsCard";

interface NewsContentProps {
  newsArray: any;
  category: string;
  date: string;
}

export const NewsContent: React.FC<NewsContentProps> = ({
  newsArray,
  category,
  date,
}) => {
  console.log(newsArray)
  return (
    <div className="container mx-auto mb-8">
      <div className="content flex border-b mb-4">
        <div className="date flex-1 text-left">{date}</div>
      </div>
      <div className="article-box"></div>
      <div className="card-container bg-slate-50 px-4">
        <div className="heading border-b border-slate-200">
          <h1 className="text-left font-bold text-3xl">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
        </div>
        <div className="default-heading py-2">
          <h1 className="text-left font-bold text-2xl text-red-700">
            Latest Stories
          </h1>
        </div>
        {newsArray.map(
          (
            newsItem: { title: React.Key | null | undefined },
            index: number
          ) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} index={index} />
          )
        )}
      </div>
    </div>
  );
};
