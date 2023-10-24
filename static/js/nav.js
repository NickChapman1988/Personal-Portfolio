/* Adapted from Online Tutorials YouTube channel - 
'Magic Navigation Menu Indicator using HTML, CSS & Javascript | Curve Outside Effects */

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));
