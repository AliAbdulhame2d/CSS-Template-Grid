const sidebar = document.querySelector('aside');
const logo = document.querySelector('.logo');
const sidebarnBtn = document.querySelector('.sidebar-btn');

const dropdownBtn = document.querySelector('.dropdown-btn');
const subMenu = document.querySelector('.sub-menu');
 
function toggleSubMenu() {
    subMenu.classList.toggle('show');
    dropdownBtn.classList.toggle('rotate');

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        sidebarnBtn.classList.toggle('rotate');
        logo.classList.toggle('hidden');
    }
}

function toggleSidebar() {
    sidebar.classList.toggle('close');
    sidebarnBtn.classList.toggle('rotate');
    logo.classList.toggle('hidden');
    if(subMenu.classList.contains('show')) {
        subMenu.classList.toggle('show');
        dropdownBtn.classList.toggle('rotate');
    }
}