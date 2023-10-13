$(function() {
  if (navigator.onLine === true) {
    $(".offline").hide();
  } else {
    $(".online").hide();
  }
});