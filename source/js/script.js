var html = document.querySelector('.nojs');

html.classList.remove('nojs');

// мобильное меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// интерактивная карта
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(((screen.width < 1300) ? 59.93877121663107 : 59.939075), ((screen.width < 1300) ? 30.323274149999975 : 30.31965))
  };
  var map = new google.maps.Map(document.getElementById("interactive-map"), mapOptions);
  var image = (screen.width < 768) ? "img/map-pin-small.png" : "img/map-pin.png";
  var myLatLng = new google.maps.LatLng(59.93877121663107, 30.323274149999975);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
