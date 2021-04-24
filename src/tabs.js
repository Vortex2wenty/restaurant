function initializeTabs() {
    const content = document.querySelector('#content');
    const heroImage = content.querySelector('#content img');
    const tab = document.createElement('div');
    tab.setAttribute('id', 'tabs');
    const tabsList = document.createElement('ul');
    const aboutTab = document.createElement('li');
    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('active');
    aboutBtn.textContent = 'About';
    aboutTab.appendChild(aboutBtn);
    const contactTab = document.createElement('li');
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactTab.appendChild(contactBtn);
    const menuTab = document.createElement('li');
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Contact';
    menuTab.appendChild(menuBtn);
    tabsList.appendChild(aboutTab);
    tabsList.appendChild(contactTab);
    tabsList.appendChild(menuTab);
    tab.appendChild(tabsList);
    content.insertBefore(tab, heroImage);
}

export { initializeTabs };