var map;

function initMap() {
    
    var uluru = { lat: 49.226988, lng: 28.408489 };
    
    map = new google.maps.Map(
        document.getElementById("map"), {zoom: 15, center: uluru});    
    var marker = new google.maps.Marker({position: uluru, map: map});
  }