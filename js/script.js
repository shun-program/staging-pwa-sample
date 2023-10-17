$(function() {
  if (navigator.onLine === true) {
    $(".offline").hide();
  } else {
    $(".online").hide();
  }
});


function doReload() {

        // reloadメソッドによりページをリロード
        window.location.reload();
      }