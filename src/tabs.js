import addAboutTab from './about.js';
import addContactTab from './contact.js';
import addMenuTab from './menu.js';

function initializeTabs(activeTab = 'about') {
    const content = document.querySelector('#content');
    const heroImage = content.querySelector('#content img');
    const tab = document.createElement('div');
    tab.setAttribute('id', 'tabs');
    const tabsList = document.createElement('ul');
    const aboutTab = document.createElement('li');
    const aboutBtn = document.createElement('button');
    if (activeTab === 'about') {
        aboutBtn.classList.add('active');
    }
    aboutBtn.classList.add('btn-about', activeTab === 'about' ? 'active' : null);
    aboutBtn.textContent = 'About';
    aboutTab.appendChild(aboutBtn);
    const contactTab = document.createElement('li');
    const contactBtn = document.createElement('button');
    if (activeTab === 'contact') {
        contactBtn.classList.add('active');
    }
    contactBtn.classList.add('btn-contact');
    contactBtn.textContent = 'Contact';
    contactTab.appendChild(contactBtn);
    const menuTab = document.createElement('li');
    const menuBtn = document.createElement('button');
    if (activeTab === 'menu') {
        menuBtn.classList.add('active');
    }
    menuBtn.classList.add('btn-menu');
    menuBtn.textContent = 'Menu';
    menuTab.appendChild(menuBtn);
    tabsList.appendChild(aboutTab);
    tabsList.appendChild(contactTab);
    tabsList.appendChild(menuTab);
    tab.appendChild(tabsList);
    content.insertBefore(tab, heroImage);
    aboutBtn.addEventListener('click', () => {
        content.innerHTML = '';
        addAboutTab();
        initializeTabs('about');
    });
    contactBtn.addEventListener('click', () => {
        content.innerHTML = '';
        addContactTab();
        initializeTabs('contact');
    });
    menuBtn.addEventListener('click', () => {
        content.innerHTML = '';
        addMenuTab();
        initializeTabs('menu');
    });
}

export { initializeTabs };