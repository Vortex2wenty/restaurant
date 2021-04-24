function addAboutTab() {
  const content = document.querySelector('#content');
  const title = document.createElement('h1');
  title.textContent = 'My Great Restaurant';
  const heroImage = document.createElement('img');
  heroImage.setAttribute('src', 'restaurant.jpg');
  heroImage.setAttribute('alt', 'Restaurant image.');
  heroImage.setAttribute('loading', 'lazy');
  const description = document.createElement('p');
  description.textContent = 'Welcome to my great restaurant! Here, we put lots of hard work and devotion into mastering the craft of good food. We hope you stop by one day.';
  content.appendChild(title);
  content.appendChild(heroImage);
  content.appendChild(description);
}

export default addAboutTab;