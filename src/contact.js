function addContactTab() {
  const content = document.querySelector('#content');
  const title = document.createElement('h1');
  title.textContent = 'Contact';
  const heroImage = document.createElement('img');
  heroImage.setAttribute('src', 'contact.png');
  heroImage.setAttribute('alt', 'Image of the contact profile.');
  heroImage.setAttribute('loading', 'lazy');
  const description = document.createElement('p');
  description.textContent = 'Contact us at blahblahblah@restaurant.com!';
  content.appendChild(title);
  content.appendChild(heroImage);
  content.appendChild(description);
}

export default addContactTab;