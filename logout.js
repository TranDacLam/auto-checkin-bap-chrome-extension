$(function () {
  setTimeout(function() {
    $('.nav-account .dropdown-item')[0].click();
    setTimeout(function() {
      location.reload();
    }, 3000);
  }, 2000);
});