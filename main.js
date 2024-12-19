import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const animateSection = () => {
      let mm = gsap.matchMedia();
      let ctx = null;

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          const { isDesktop, isMobile } = context.conditions;

          const cards = document.querySelectorAll(".big-card");

          if (isDesktop) {
            ctx = gsap.context(() => {
              const timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: ".anim-container",
                  start: "top top",
                  end: "bottom bottom",
                  pin: ".anim-container__pinned-content",
                  pinSpacing: false,
                  scrub: true,
                },
              });

              const paginationItems = document.querySelectorAll(
                ".anim-container__pagination-item"
              );


              const getScrollValueByCard = (card) => {
                const cardRect = card.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY || window.pageYOffset;
                return cardRect.top + scrollY - (windowHeight / 2 - cardRect.height / 2);
              };

              paginationItems.forEach((item, index) => {
                item.classList.remove("active");
                item.addEventListener("click", () => {
                  let scrolltoCardValue = getScrollValueByCard(cards[index]);
                  gsap.to(window, {
                    scrollTo: { y: scrolltoCardValue, autoKill: false },
                    overwrite: true,
                    duration: 1,
                  });
                });
              });

              cards.forEach((card, index) => {
                timeline.from(card, {
                  yPercent: 10,
                  ease: "power4",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    scrub: true,
                    markers: false,
                    id: `card-${index + 1} isDesktop`,
                    onEnter: () =>
                      paginationItems[index].classList.add("active"),
                    onLeaveBack: () =>
                      paginationItems[index].classList.remove("active"),
                  },
                });
              });

            });
            // end if desktop
          }

          if (isMobile) {
            ctx = gsap.context((self) => {
              cards.forEach((card, index) => {
                gsap.from(card, {
                  yPercent: 40,
                  opacity: 0,
                  ease: "power4",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "top center",
                    scrub: true,
                    markers: false,
                    id: `${index} - mobile`,
                  },
                });
              });
            });
          }
        }
      );
    };
    animateSection();
  },
  true
);
