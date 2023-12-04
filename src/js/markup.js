const articlesList = document.getElementById('articlesWrapper');

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

export { createMarkup, updateArticlesList };
