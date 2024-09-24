import navLogic from './nav'

function main() {
  const pageWrapper = document.querySelector('.page-wrapper')

  navLogic()

  if (pageWrapper.classList.contains('home')) {
    // handleHomePage()
  } else if (pageWrapper.classList.contains('contact')) {
    // handleContactPage()
  }
}

// Execute main function
main()
