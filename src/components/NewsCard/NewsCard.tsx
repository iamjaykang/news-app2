import React, { useEffect, useState } from "react";

interface NewsCardProps {
  newsItem: any;
  index: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ newsItem, index }) => {
  return (
    <>
      <div className={`news-card${index} border-b border-slate-200 py-4 last:border-none`}>
        <div className="newsText flex flex-row">
          <div className="text flex-1 text-left">
            <div className="mb-2">
              <a href={newsItem.link} target="__blank" className="source">
                <span className="title font-bold text-xl">{newsItem.title}</span>
              </a>
              <br />
            </div>
            <div className="description text-sm">{newsItem.summary}</div>
          </div>
          <div className="image flex-1 max-w-[12rem]">
            <img
              alt={newsItem.topic}
              src={
                newsItem.media
                  ? newsItem.media
                  : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
              }
              className="newsImage w-full ml-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
