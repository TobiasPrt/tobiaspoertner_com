export const bindNavigationEventHandler = () => {
    const navigationButton = document.getElementById('navButton');

    navigationButton.addEventListener('click', toggleMobileNavigation);
}


const toggleMobileNavigation = () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('nav--active');

    const button = document.getElementById('navButton');
    
    if (button.classList.contains('open') || button.classList.contains('close')) {
        button.classList.toggle('close');
    }
    button.classList.toggle('open');
}