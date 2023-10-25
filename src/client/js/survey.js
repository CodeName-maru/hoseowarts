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