import axios from 'axios';

const ENDPOINT = 'https://newsapi.org/v2/everything';
const KEY_API = '1bfb956be4624deab8ea82acf099560b';

const searchParams = new URLSearchParams({
  apiKey: KEY_API,
  pageSize: 5,
});

async function getNews(query) {
  const URL = `${ENDPOINT}?q=${query}&${searchParams}`;

  const response = await axios.get(URL);
  const data = await response.data;

  return data.articles;
}

export default getNews;
