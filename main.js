import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

console.log("hello js asd");
let ctx = null
let timeLine = null;

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const animateSection = () => {
      let mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop, isMobile } = context.conditions

          const cards = document.querySelectorAll('.big-card')

          if (isDesktop) {
            ctx = gsap.context(() => {
              ScrollTrigger.create({
                trigger: '.anim-container',
                start: 'top top',
                end: 'bottom bottom',
                pin: '.anim-container__pinned-content',
                pinSpacing: false,
              })

              const paginationItems = document.querySelectorAll('.anim-container__pagination-item')
              paginationItems.forEach((item, index) => {
                item.classList.remove('active')
              })
              cards.forEach((card, index) => {
                gsap.from(card, {
                  yPercent: 10,
                  ease: 'power4',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    scrub: true,
                    markers: false,
                    id: `card-${index + 1} isDesktop`,
                    onEnter: () => paginationItems[index].classList.add('active'),
                    onLeaveBack: () => paginationItems[index].classList.remove('active'),
                  },
                })
              })
            })
          }

          if (isMobile) {
            ctx = gsap.context((self) => {
              cards.forEach((card, index) => {
                gsap.from(card, {
                  yPercent: 40,
                  opacity: 0,
                  ease: 'power4',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'top center',
                    scrub: true,
                    markers: false,
                    id: `${index} - mobile`,
                  },
                })
              })
            })
          }
        },
      )
    }
    animateSection()
    window.addEventListener("load", () => {
      //
    });
  },
  true
);

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
})
