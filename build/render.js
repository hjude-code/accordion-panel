/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
let accordionPanels = document.querySelectorAll('.wp-block-accordion-panel-accordion-panel');
accordionPanels.forEach(panel => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('is-panel-open');
  });
});
/******/ })()
;
//# sourceMappingURL=render.js.map