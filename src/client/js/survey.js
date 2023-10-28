function onClickPre() {
  try {
    document.querySelector('input[name="choice"]:checked').value = 0;
  } catch (_unused) {}
  document.getElementById('submit').submit();
}
function onClickNext() {
  var value = document.querySelector('input[name="choice"]:checked').value;
  document.getElementById('submit').submit();
}
document.querySelector('#pre').addEventListener('click', onClickPre);
document.querySelector('#next').addEventListener('click', onClickNext);

function clickEffect(e){
  var d=document.createElement("div");
  d.className="clickEffect";
  d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
  document.body.appendChild(d);
  d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click',clickEffect);