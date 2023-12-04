import getNews from './NewsApi.js';
import { createMarkup, updateArticlesList } from './markup.js';
import Notiflix from 'notiflix';

const form = document.getElementById('form');
const articlesList = document.getElementById('articlesWrapper');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = form.elements.news.value.trim();

  if (searchTerm === '') {
    Notiflix.Notify.info('Please, write something !');
    return;
  }

  clear();
  loadData(searchTerm);
});

function clear() {
  articlesList.innerHTML = '';
  form.reset();
}

async function loadData(searchTerm) {
  try {
    const articles = await getNews(searchTerm);

    if (articles.length === 0) {
      onError(
        "'Sorry, there are no article matching your search query. Please try again.'"
      );
      return;
    }

    const markup = createMarkup(articles);
    updateArticlesList(markup);
  } catch (error) {
    onError(error.message);
  }
}

function onError(error) {
  Notiflix.Notify.failure(error);
  updateArticlesList(`<p>${error}</p>`);
}
