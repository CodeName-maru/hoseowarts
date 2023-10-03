history.pushState(null, null, location.href);
window.onpopstate = (event)=> (history.go(1)); 




