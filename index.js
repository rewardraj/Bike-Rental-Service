// Hamburger toggle menu
const hamburgerSlide = () => {
    const burger = document.querySelector('.burgery');
    const nav = document.querySelector('.navlinks');
    const navlinks = nav.querySelectorAll('.navlinks li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Nav links animation in burger menu
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });

}

hamburgerSlide();