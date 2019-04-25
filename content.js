'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // Handler when the DOM is fully loaded
  WebFont.load({
    google: {
      families: ['Exo', 'Gudea', 'Montserrat', 'Roboto', 'Rubik']
    }
  });
});

// const main = document.querySelector('.document-actions');
// const resetButton = document.createElement('button');
// resetButton.style.top = '5px';
// resetButton.style.right = '5px';
// resetButton.style.position = 'fixed';
// resetButton.style.zIndex = '1';
// resetButton.style.padding = '10px';
// resetButton.style.margin = '10px';
// resetButton.innerHTML = 'Revert to boring MDN.';
// main.appendChild(resetButton);

// function loadCSS(file) {
//   var link = document.createElement('link');
//   link.href = chrome.extension.getURL(file + '.css');
//   link.id = file;
//   link.type = 'text/css';
//   link.rel = 'styles.css';
//   document.getElementsByTagName('head')[0].appendChild(link);
// }

// function unloadCSS(file) {
//   var cssNode = document.getElementById(file);
//   cssNode && cssNode.parentNode.removeChild(cssNode);
// }

// resetButton.addEventListener('click', () => {
//   unloadCSS(styles.css);
// });

// var enable = false;
// chrome.browserAction.onClicked.addListener(function(tab) {
//   enable = enable ? false : true;
//   if (enable) {
//     //turn on...
//     chrome.browserAction.setIcon({ path: 'icon.png' });
//     chrome.browserAction.setBadgeText({ text: 'ON' });
//     chrome.tabs.executeScript(null, { file: 'content.js' });
//   } else {
//     //turn off...
//     chrome.browserAction.setIcon({ path: 'disable.png' });
//     chrome.browserAction.setBadgeText({ text: '' });
//   }
// });
