function addMenuTab() {
  const content = document.querySelector('#content');
  const title = document.createElement('h1');
  title.textContent = 'Menu';
  const heroImage = document.createElement('img');
  heroImage.setAttribute('src', 'menu.jpg');
  heroImage.setAttribute('alt', 'Image of the menu.');
  heroImage.setAttribute('loading', 'lazy');
  const description = document.createElement('p');
  description.textContent = 'Here is our brand new menu. Enjoy!';
  content.appendChild(title);
  content.appendChild(heroImage);
  content.appendChild(description);
}

export default addMenuTab;