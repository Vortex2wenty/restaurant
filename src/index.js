import onPageLoad from './page-load.js';
import { initializeTabs } from './tabs.js';

document.addEventListener('DOMContentLoaded', () => {
    onPageLoad();
    initializeTabs();
});