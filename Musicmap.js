/*MUSIC MAP*/
function Music() {
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#e1ffc4"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e7e7e7"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fbf3b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffd0a2"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fed8ad"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fea94b"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#d0e8ff"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ])
  {name: 'Styled Map'};

  var myCenter = new google.maps.LatLng(42.3361,-71.1);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions)
    mapTypeControlOptions: {mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
};

  var infowindow = new google.maps.InfoWindow();
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');


  var icon = {
    url: "GrayPin.png", // url
    scaledSize: new google.maps.Size(25, 40), // scaled size
  };


  function ClickPin(marker, name, address, information, url){
    google.maps.event.addListener(marker,'click',function() {
      infowindow.setOptions({
        content: name + "<br>" + address
      });
      infowindow.open(map,marker);
      document.getElementById("name").innerHTML = name;
      document.getElementById("information").innerHTML = information;
      document.getElementById("directions").innerHTML = "Directions".link(url);
      });

  };

  var ColescottRubin = new google.maps.Marker({position:new google.maps.LatLng(42.336879, -71.011351)});
     ColescottRubin.setIcon(icon);
     ColescottRubin.setMap(map);
     ClickPin(ColescottRubin, "Colescott Rubin", "Castle Island, Boston, MA, 02127, United States",
     "Playing Jazz and Blues on Saturday, August 26, 2017 at 2:00 p.m.",
     "https://www.google.com/maps/place/Castle+Island/@42.3373279,-71.0106323,14z/data=!3m1!4b1!4m5!3m4!1s0x89e37aaef97ca7c9:0x93f033ec95b3340f!8m2!3d42.3373284!4d-71.0106323");

   var ZahiliGonzalezZamora = new google.maps.Marker({position:new google.maps.LatLng(42.355287, -71.063933)});
     ZahiliGonzalezZamora.setIcon(icon);
     ZahiliGonzalezZamora.setMap(map);
     ClickPin(ZahiliGonzalezZamora, "Zahili Gonzalez Zamora", "Boston Common, Boston, MA, 02108, United States",
     "Playing Cuban Jazz on piano. Monday, August 28, 2017 at 12:00 p.m.",
     "https://www.google.com/maps/place/Boston+Common/@42.3549544,-71.0654886,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709dbc6e232b:0x3f8683fc7ba94f04!8m2!3d42.3549544!4d-71.0654886");

   var ValentinaLopez = new google.maps.Marker({position:new google.maps.LatLng(42.322326, -71.170262)});
     ValentinaLopez.setIcon(icon);
     ValentinaLopez.setMap(map);
     ClickPin(ValentinaLopez, "Valentina Lopez", "55 Boylston Street, Chestnut Hill, MA, 02467, United States",
     "Playing a mixture of acoustic, Spanish, and English popular songs at The Street on Sunday, September 3, 2017 at 12:00 p.m.",
     "https://www.google.com/maps/place/The+Street+Chestnut+Hill/@42.3232256,-71.1682455,17z/data=!3m1!4b1!4m5!3m4!1s0x89e378f27e6b0fc1:0xcbf15011a1221e81!8m2!3d42.3232256!4d-71.1682455");

 	var StephanieJames = new google.maps.Marker({position:new google.maps.LatLng(42.353807, -71.057643)});
     StephanieJames.setIcon(icon);
     StephanieJames.setMap(map);
     ClickPin(StephanieJames, "Stephanie James", "100 Summer Street, Boston, MA, 02110, United States",
     "Playing pop and soul on Thursday, September 7, 2017 at 12:00 p.m.",
     "https://www.google.com/maps/place/100+Summer+St,+Boston,+MA+02110/@42.3539011,-71.0573421,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3708243c5aac5:0xa32a2abc907ec6c5!8m2!3d42.3539011!4d-71.0573421");
 }

 function HideMap(){
  document.getElementById("googleMap").style.display = "none";
  MusicListView();
}

function MusicListView(){
  document.getElementById("title").innerHTML = "Click the name to open it in Google Maps!"

   document.getElementById("CRub_name").innerHTML = "Colescott Rubin".link("https://www.google.com/maps/place/Castle+Island/@42.3373279,-71.0106323,14z/data=!3m1!4b1!4m5!3m4!1s0x89e37aaef97ca7c9:0x93f033ec95b3340f!8m2!3d42.3373284!4d-71.0106323");
   document.getElementById("CRub_address").innerHTML = "Castle Island, Boston, MA, 02127, United States";
   document.getElementById("CRub_information").innerHTML = "Playing Jazz and Blues on Saturday, August 26, 2017 at 2:00 p.m.";

   document.getElementById("ZGZ_name").innerHTML = "Zahili Gonzalez Zamora".link("https://www.google.com/maps/place/Boston+Common/@42.3549544,-71.0654886,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709dbc6e232b:0x3f8683fc7ba94f04!8m2!3d42.3549544!4d-71.0654886");
   document.getElementById("ZGZ_address").innerHTML = "Boston Common, Boston, MA, 02108, United States";
   document.getElementById("ZGZ_information").innerHTML = "Playing Cuban Jazz on piano. Monday, August 28, 2017 at 12:00 p.m.";

   document.getElementById("VLo_name").innerHTML = "Valentina Lopez".link("https://www.google.com/maps/place/The+Street+Chestnut+Hill/@42.3232256,-71.1682455,17z/data=!3m1!4b1!4m5!3m4!1s0x89e378f27e6b0fc1:0xcbf15011a1221e81!8m2!3d42.3232256!4d-71.1682455");
   document.getElementById("VLo_address").innerHTML = "55 Boylston Street, Chestnut Hill, MA, 02467, United States";
   document.getElementById("VLo_information").innerHTML = "Playing a mixture of acoustic, Spanish, and English popular songs at The Street on Sunday, September 3, 2017 at 12:00 p.m.";

   document.getElementById("SJam_name").innerHTML = "Stephanie James".link("https://www.google.com/maps/place/100+Summer+St,+Boston,+MA+02110/@42.3539011,-71.0573421,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3708243c5aac5:0xa32a2abc907ec6c5!8m2!3d42.3539011!4d-71.0573421");
   document.getElementById("SJam_address").innerHTML = "100 Summer Street, Boston, MA, 02110, United States";
   document.getElementById("SJam_information").innerHTML = "Playing pop and soul on Thursday, September 7, 2017 at 12:00 p.m.";
  document.getElementById("googleMap").style.display = "none";
  document.getElementById("title").style.display="block";
  document.getElementById("CRub_name").style.display = "block";
  document.getElementById("CRub_address").style.display = "block";
  document.getElementById("CRub_information").style.display = "block";
  document.getElementById("ZGZ_name").style.display = "block";
  document.getElementById("ZGZ_address").style.display = "block";
  document.getElementById("ZGZ_information").style.display = "block";
  document.getElementById("VLo_name").style.display = "block";
  document.getElementById("VLo_address").style.display = "block";
  document.getElementById("VLo_information").style.display = "block";
  document.getElementById("SJam_name").style.display = "block";
  document.getElementById("SJam_address").style.display = "block";
  document.getElementById("SJam_information").style.display = "block";
}

function HideList(){
  document.getElementById("googleMap").style.display = "block";
  document.getElementById("title").style.display="none";
  document.getElementById("CRub_name").style.display = "none";
  document.getElementById("CRub_address").style.display = "none";
  document.getElementById("CRub_information").style.display = "none";
  document.getElementById("ZGZ_name").style.display = "none";
  document.getElementById("ZGZ_address").style.display = "none";
  document.getElementById("ZGZ_information").style.display = "none";
  document.getElementById("VLo_name").style.display = "none";
  document.getElementById("VLo_address").style.display = "none";
  document.getElementById("VLo_information").style.display = "none";
  document.getElementById("SJam_name").style.display = "none";
  document.getElementById("SJam_address").style.display = "none";
  document.getElementById("SJam_information").style.display = "none";
}
