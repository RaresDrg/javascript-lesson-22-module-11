import NewsApi from './NewsApi.js';

// import Notiflix from 'notiflix';

const newsApi = new NewsApi();

const form = document.getElementById('form');
const articlesList = document.getElementById('articlesWrapper');
const loadingEL = document.getElementById('loading');

const handleInfiniteScroll = event => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 25) {
    loadData(event);
    console.log('cacat');
  }
};

form.addEventListener('submit', event => {
  debugger;
  event.preventDefault();
  const inputValue = form.elements.news.value.trim();

  if (inputValue === '') {
    alert('Please, write something');
    return;
  }

  newsApi.searchQuery = inputValue;
  newsApi.resetPage();

  clearArticlesList();
  addScrollEventListener();
  loadData(event).finally(() => form.reset());
});

function loadData(event) {
  showElement(loadingEL);

  return newsApi
    .getNews()
    .then(({ articles }) => {
      if (articles?.length === 0) {
        return onError(event);
      }

      return createMarkup(articles);
    })

    .then(markup => {
      updateArticlesList(markup);
      hideElement(loadingEL);
    })
    .catch(error => alert(error));
}

function createMarkup(articles) {
  const markup = articles
    .map(article => {
      const { author, title, description, url, urlToImage } = article;
      return `
      <div class="article-card">
        <h2 class="article-title">${title}</h2>
        <h3 class="article-author">${author || 'Anonym'}</h3>
        <img src=${urlToImage} class="article-img">
        <p class="article-description">${description}</p>
        <a href=${url} class="article-link" target="_blank">Read more</a>
      </div>
    `;
    })
    .join('');
  return markup;
}

function updateArticlesList(markup) {
  articlesList.innerHTML += markup;
}

function clearArticlesList() {
  articlesList.innerHTML = '';
}

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function onError(event) {
  hideElement(loadingEL);

  if (event.type === 'submit') {
    updateArticlesList('<h3>Articles not found</h3>');
    throw new Error('No data');
  }

  if (event.type === 'scroll') {
    removeScrollEventListener();
    throw new Error('No more articles');
  }
}

function addScrollEventListener() {
  window.addEventListener('scroll', handleInfiniteScroll);
}

function removeScrollEventListener() {
  window.remove('scroll', handleInfiniteScroll);
}
