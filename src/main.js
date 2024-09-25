import { gsap } from 'gsap'
import $ from 'jquery'

// // set variables
// let textItem = $('.marquee_general-item')
// let wrap = $('.marquee_wrap')
// let totalItems = items.length / 2 + 1
// let duration = totalItems * 3.2

// // switch which item is active
// function makeItemActive(myIndex) {
//   items.removeClass('active')
//   $('.marquee_reels').each(function () {
//     $(this).find('.marquee_reel').eq(myIndex).addClass('active')
//   })
//   textItem.removeClass('active')
//   textItem.eq(myIndex).addClass('active')
// }
// makeItemActive(3)

// // check if item is in center of wrapper
// function checkPosition() {
//   let wrapCenter = wrap.offset().top + wrap.height() / 2
//   items.each(function () {
//     let itemHeight = $(this).height() / 2
//     let offsetTop = $(this).offset().top + itemHeight
//     if (offsetTop < wrapCenter + itemHeight / 2 && offsetTop > wrapCenter) {
//       let myIndex = $(this).index()
//       makeItemActive(myIndex)
//     }
//   })
// }

// // create vertical loop
// let marquee = gsap.timeline({ repeat: -1 }).fromTo(
//   '.marquee_track',
//   { yPercent: 0 },
//   {
//     yPercent: -50,
//     duration: duration,
//     ease: 'none',
//     onUpdate: () => {
//       checkPosition()
//     },
//   }
// )

// Pause the scroll on hover and resume when hover ends
// wrap.on('mouseenter', () => {
//   marquee.pause() // Pause the GSAP timeline
// })

// wrap.on('mouseleave', () => {
//   marquee.resume() // Resume the GSAP timeline
// })

const items = $('.marquee_reel')
let itemHeight = items.height() + 30
console.log(itemHeight)
console.log(items)

let swipeTl = gsap.timeline({ repeat: -1, yoyo: true })

items.each(function () {
  for (let i = 0; i < items.length; i++) {
    swipeTl.to(
      '.marquee_track',
      {
        y: -itemHeight * i,
        duration: 1,
        ease: 'power4.inOut',
      },
      '>2'
    )
  }
})

$('.quote-span-wrapper').each(function (index) {
  let relatedEl = $('.quote_span-element').eq(index)
  relatedEl.appendTo($(this))
})
