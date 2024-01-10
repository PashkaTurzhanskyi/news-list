import axios from 'axios';
import { useState, useEffect } from 'react';

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
          <li key={item.id}>
            <p>Publisher:{item.publisher.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
