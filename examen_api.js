function iniciarMap(){
    var coord = {lat:40.43624033757664 ,lng: -3.6286904981167236};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}