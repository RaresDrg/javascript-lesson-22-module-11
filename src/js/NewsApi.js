import axios from 'axios';

const ENDPOINT = 'https://newsapi.org/v2/everything';
const KEY_API = '1bfb956be4624deab8ea82acf099560b';

const searchParams = new URLSearchParams({
  key: KEY_API,
  pageSize: 10,
});

class NewsApi {
  constructor() {
    this.searchQuery = '';
    this.queryPage = 1;
  }

  getNews() {
    const url = `${ENDPOINT}?${searchParams}&`;

    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data;
      });
  }

  incrementPage() {
    this.queryPage += 1;
  }

  resetPage() {
    this.queryPage = 1;
  }
}

export default NewsApi;
