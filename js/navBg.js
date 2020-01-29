const nav = document.querySelector('.main__nav')

const navchange = e => window.pageYOffset >= 50 ? nav.classList.add('navBg') : nav.classList.remove('navBg')

export { navchange }
