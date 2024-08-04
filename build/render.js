/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
const accordionGroups = document.querySelectorAll('*:has(>.wp-block-accordion-panel-accordion-panel)');
accordionGroups.forEach(accordionGroup => {
  const accordionPanels = accordionGroup.querySelectorAll('.wp-block-accordion-panel-accordion-panel');
  let activePanel;
  accordionPanels.forEach(panel => {
    const panelHeader = panel.querySelector('.panel-header');
    panelHeader.addEventListener('click', () => {
      if (activePanel && activePanel !== panel) {
        activePanel.classList.remove('is-panel-open');
      }
      panel.classList.toggle('is-panel-open');
      activePanel = panel;
    });
  });
});
/******/ })()
;
//# sourceMappingURL=render.js.map