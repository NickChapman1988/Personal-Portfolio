const themeBtn = document.querySelector('.theme-btn');
themeBtn.onclick = function(){
    themeBtn.classList.toggle('active');
    document.querySelector('body').classList.toggle('dark-mode');
}