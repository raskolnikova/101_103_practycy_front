const links = [
  {
    name: 'Обо мне',
    link: './index.html'
  },
  {
    name: 'Блог',
    link: './blog.html'
  },
  {
    name: 'Проекты',
    link: './projects.html'
  },
  {
    name: 'Доклады',
    link: './presentations.html'
  },
  {
    name: 'Резюмешечка для работодателей',
    link: './resume.html'
  },
]

const contactsLinks = [
  {
    name: 'Гитхаб',
    link: 'https://github.com/raskolnikova'
  },
  {
    name: 'Телеграмм',
    link: 'https://web.telegram.org/k/'
  },
  {
    name: 'Линкидин',
    link: 'https://ru.linkedin.com'
  },
];


function getElement(name, link) {
  let linkContainer = document.createElement('li');
  let linkElement = document.createElement('a');
  linkElement.text = name;
  linkElement.setAttribute('href', link)

  // li.innerHTML = `<a href="./blog.html">Блог</a>`;
  linkContainer.append(linkElement)

  return linkContainer;
}

function renderLinks(links, selector) {
  let container = document.querySelector(selector);

  // for (let i = 0; i < links.length; i++) {
  //   const element = renderElement(links[i].name, links[i].link);
  //   navbar.append(element);
  // }

  links.forEach(link => {
    const element = getElement(link.name, link.link);
    container.append(element);
  });
  
}

renderLinks(links, 'ul.navigation');
renderLinks(contactsLinks, 'ol.navigation');

// navbar.innerHTML=`
//   <li><a href="./index.html">Обо мне</a></li>
//         <li><a href="./blog.html">Блог</a></li>
//         <li><a href="./projects.html">Проекты</a></li>
//         <li><a href="./presentations.html">Доклады</a></li>
//         <li><a href="./resume.html">Резюмешечка для работодателей</a></li>
// `