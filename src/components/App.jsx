import axios from 'axios';
import { useState, useEffect } from 'react';
import css from './App.module.css';

export const App = () => {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.polygon.io/v2/reference/news?ticker=AAPL&limit=100&apiKey=KPcpXIk3tqCf5HBomDdRTQR2WTTFUDXy'
      )
      .then(({ data }) => {
        setListNews(data.results);
        console.log(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      News list
      <ul>
        {listNews.map(item => (
          <li key={item.id} className={css.newsCard}>
            <p>{item.author}</p>
            <h2>{item.title}</h2>
            <div className={css.thumb}>
              <img alt={item.title} src={item.image_url} width="200px" />
              <p>{item.description}</p>
            </div>
            <p>Publisher:{item.publisher.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
