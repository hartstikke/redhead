import $ from 'jquery'

export default function navLogic() {
  const languageBanner = document.querySelector('.banner_component')

  if (window.scrollY > 1) {
    if (!languageBanner.classList.contains('is-scrolled')) {
      languageBanner.classList.add('is-scrolled')
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
      console.log('Page scrolled more than 1px.')

      if (!languageBanner.classList.contains('is-scrolled')) {
        languageBanner.classList.add('is-scrolled')
      }
    } else {
      if (languageBanner.classList.contains('is-scrolled')) {
        languageBanner.classList.remove('is-scrolled')
      }
    }
  })

  function updateNavDropdown() {
    if (window.innerWidth < 991) {
      $('.nav_dropdown-toggle').addClass('w--open')
      $('.nav_dropdown-list').addClass('w--open')
    } else {
      $('.nav_dropdown-toggle').removeClass('w--open')
      $('.nav_dropdown-list').removeClass('w--open')
    }
  }

  // Run on initial load
  $(document).ready(updateNavDropdown)

  // Run on window resize
  $(window).resize(updateNavDropdown)
}
