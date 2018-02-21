const TOOLTIP_ENABLE = "Enable spellchecker";
const TOOLTIP_DISABLE = "Disable spellchecker";

function enableNightMode(tab, title) {
    browser.pageAction.setTitle({tabId: tab.id, title: TOOLTIP_DISABLE});
}

function disableSpellchecker(tab, title) {
    browser.pageAction.setTitle({tabId: tab.id, title: TOOLTIP_ENABLE});
}