import addAboutTab from './about.js';

function onPageLoad() {
    const content = document.querySelector('#content');
    addAboutTab();
};

export default onPageLoad;