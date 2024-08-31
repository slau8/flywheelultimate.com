/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  function removeElements() {
    // Remove all Notion tooltips on images
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Remove hidden properties dropdown
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling

    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none'
    }

    // Remove dark/light toggle (notion bug)
    document
      .querySelectorAll('div.notion-topbar > div > div.toggle-mode')
      ?.forEach(el => (el.style.setProperty('display', 'none', 'important')))

    document
      .querySelectorAll('div.notion-topbar-mobile > div.toggle-mode')
      ?.forEach(el => (el.style.setProperty('display', 'none', 'important')))


  }
  removeElements()
  setInterval(removeElements, 1000) // Under the hood, Notion refreshes the page for new content at a rate of ~1000 ms
}
