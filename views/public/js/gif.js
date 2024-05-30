document.querySelector('.gif-background').width = window.innerWidth;
document.querySelector('.gif-background').height = window.innerHeight - 1;
window.onresize = function(e) {
  document.querySelector('.gif-background').width = window.innerWidth;
  document.querySelector('.gif-background').height = window.innerHeight - 100;
}