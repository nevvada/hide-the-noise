// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({ color: '#3aa757' }, function() {
//     console.log('The color is green.');
//   });
// });

// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src =
//     'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  WebFont.load({
    google: {
        families: ['Exo','Gudea','Montserrat','Roboto','Rubik']
    }
  });
});



