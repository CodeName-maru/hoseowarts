"use strict";

history.pushState(null, null, location.href);
window.onpopstate = function (event) {
  return history.go(1);
};