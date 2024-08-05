const accordionGroups = document.querySelectorAll('*:has(>.wp-block-accordion-panel-accordion-panel)')

function calculatePanelSizes(accordionGroup){
    let groupW = accordionGroup.getBoundingClientRect().width
    let groupH = accordionGroup.getBoundingClientRect().height
    let headersW = 0
    let headersH = 0


    const accordionPanelHeaders = accordionGroup.querySelectorAll('.wp-block-accordion-panel-accordion-panel .panel-header')
    accordionPanelHeaders.forEach((panelHeader)=>{
        headersW += panelHeader.getBoundingClientRect().width
        headersH += panelHeader.getBoundingClientRect().height
    })

    let availContentW = Math.round(groupW - headersW)
    let availContentH = Math.round(groupH - headersH)


    accordionGroup.style.setProperty('--availContentW', `${availContentW}px`)
    accordionGroup.style.setProperty('--availContentH', `${availContentH}px`)
}

accordionGroups.forEach((accordionGroup)=>{
    const accordionPanels = accordionGroup.querySelectorAll('.wp-block-accordion-panel-accordion-panel')

    calculatePanelSizes(accordionGroup)

    let activePanel

    accordionPanels.forEach((panel)=>{
        const panelHeader = panel.querySelector('.panel-header')
        panelHeader.addEventListener('click', ()=>{
            if(activePanel && activePanel !== panel){
                activePanel.classList.remove('is-panel-open')
            }
            panel.classList.toggle('is-panel-open')
            activePanel = panel
        })
    })

})

