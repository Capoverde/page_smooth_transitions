const nav = document.querySelector('.main__nav')
const body = document.querySelector('body')

const navchange = e => {
  // console.log(scrollTop)
  window.pageYOffset > 50 ? nav.classList.add('navBg') : nav.classList.remove('navBg')
}

export { navchange }
