
// Toggle Mob Menu
    const nav_toggle = document.querySelectorAll('.menu__toggle');
    const nav = document.querySelector('.drawer');
    const link = document.querySelectorAll('.drawer__nav a');

    nav_toggle.forEach(function (el) {
        el.addEventListener('click', function (event) {
            nav.classList.toggle('drawer--show');
            this.classList.toggle('menu__toggle-active');
            event.stopPropagation(); 
           
        });
    });

    link.forEach(function (el) {
        el.addEventListener('click', function () {
            nav.classList.remove('drawer--show');
        });
    });
    

