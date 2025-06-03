const articles = [
  {
    title: 'Как выбрать корм для кошечек',
    description: 'Котики любят вкусно покушать, но важно выбрать для них правильный корм',
    imageSrc: './img/scale_1200.jpeg'
  },
  {
    title: 'Покрываем тестами с помощью Jest',
    description: ' Тесты разные нужны, тесты важны и круты',
    imageSrc: './img/jest.png'
  },
    {
    title: 'Оптимизация производительность на фронте',
    description: ' Сложная но полезная статься',
    imageSrc: './img/optimization.png'
  },
];

function getArticle(article) {
  const articleContainer = document.createElement('div');
  articleContainer.classList.add('article');

  const title = document.createElement('h2');
  title.textContent = article.title;

  const description = document.createElement('p');
  description.textContent = article.description;

  const image = document.createElement('img');
  image.setAttribute('src', article.imageSrc);
  image.setAttribute('width', '200');
  image.setAttribute('height', '200');

  articleContainer.append(title, description, image)
  return articleContainer;
}

function renderArticles(articles) {
  let articlesContainer = document.querySelector('.articles');

  articles.forEach(article => {
    const articleDom = getArticle(article);
    articlesContainer.append(articleDom);
  });
}


renderArticles(articles);

//  <div class="article">
//         <h2>Как выбрать корм для кошечек</h2>
//         <p>Котики любят вкусно покушать, но важно выбрать для них правильный корм</p>
//         <img width="200" height="200" src="./img/scale_1200.jpeg" alt="Воть моя фотокарточка">
//       </div>

//       <div class="article">
//         <h2>Покрываем тестами с помощью Jest</h2>
//         <p>
//           Тесты разные нужны, тесты важны и круты
//         </p>
//         <img width="200" height="200"  src="./img/test.png" alt="Воть моя фотокарточка">
//       </div>