/*ART MAP*/
function Art() {
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

  var myCenter = new google.maps.LatLng(42.3461,-71.1);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 13};
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
        document.getElementById("name").innerHTML = name
        document.getElementById("information").innerHTML = information;
        document.getElementById("directions").innerHTML = "Directions".link(url);
        });

    };




    var BetancesMural = new google.maps.Marker({position:new google.maps.LatLng(42.340995, -71.075830)});
      BetancesMural.setIcon(icon);
      BetancesMural.setMap(map);
      ClickPin(BetancesMural, "'Betances Mural' by Lilli Ann Killen Rosenberg", "Villa Victoria, 85 W Newton St, Boston, MA 02118",
      "This mural highlights the Puerto Rican heritage of many residents in the area.", "https://www.google.com/maps/place/Villa+Victoria+Center+for+the+Arts/@42.3409714,-71.0779983,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a14829615a9:0x88a5f477009837bf!8m2!3d42.3409714!4d-71.0758096");

    var GraffitiWall = new google.maps.Marker({position:new google.maps.LatLng(42.364903, -71.102288)});
      GraffitiWall.setIcon(icon);
      GraffitiWall.setMap(map);
      ClickPin(GraffitiWall, "Graffiti Wall", "Graffiti Alley, Cambridge, MA 02139",
      "One of the only places where graffiti is legal, the displays on this wall are always changing and are created by different artists.", "https://www.google.com/maps/place/Graffiti+Alley,+Cambridge,+MA+02139/@42.3649259,-71.1044409,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37753f1305c95:0x7a2d7d66fe47b484!8m2!3d42.3649259!4d-71.1022522");

  	var Ducklings = new google.maps.Marker({position:new google.maps.LatLng(42.355502, -71.069773)});
      Ducklings.setIcon(icon);
      Ducklings.setMap(map);
      ClickPin(Ducklings, "'Make Way for Ducklings' by Nancy Schon", "Boston Public Garden, Boston, MA 02116",
      "These sculptures are based on the storybook by Robert McCloskey about a family of ducks that moves from the Charles River to the Public Garden’s pond with the help of police controlling traffic.", "https://www.google.com/maps/place/Boston+Public+Garden/@42.3541614,-71.0725965,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709e822b60bb:0xcbd77f0b5e16e701!8m2!3d42.3541614!4d-71.0704078");

  	var TainoIndians = new google.maps.Marker({position:new google.maps.LatLng(42.321701, -71.110653)});
      TainoIndians.setIcon(icon);
      TainoIndians.setMap(map);
      ClickPin(TainoIndians, "Taino Indians Mural by Rafael Rivera Garcia", "Near 10 Perkins Street, Jamaica Plains, MA 02130",
      "This modernist mural illustrates Puerto Rican Taino legends involving multiple gods.", "https://www.google.com/maps/place/10+Perkins+St,+Jamaica+Plain,+MA+02130/@42.3216943,-71.1128405,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3797796199d53:0x442f42d7cd167c18!8m2!3d42.3216943!4d-71.1106518");

    var Nielika = new google.maps.Marker({position:new google.maps.LatLng(42.312157, -71.113905)});
      Nielika.setIcon(icon);
      Nielika.setMap(map);
      ClickPin(Nielika, "Nieli'ka Mural by Mayor's Crew", "674 Centre St, Jamaica Plain, MA 02130",
      "This mural was inspired by a form of Huichol (an indigenous Mexican group) art.", "https://www.google.com/maps/place/674+Centre+St,+Jamaica+Plain,+MA+02130/@42.3121523,-71.1160797,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3796e613ad5ef:0x4fddf0ff0f646c6a!8m2!3d42.3121523!4d-71.113891");

    var Alchemist = new google.maps.Marker({position:new google.maps.LatLng(42.359000, -71.094790)});
      Alchemist.setIcon(icon);
      Alchemist.setMap(map);
      ClickPin(Alchemist, "'Alchemist' by Jaume Plensa", "Stratton Student Center, 84 Massachusetts Ave, Cambridge, MA 02139",
      "This 'thinking' figure is made of stainless steel numbers and mathematical symbol to reflect its roots in MIT.", "https://www.google.com/maps/place/Stratton+Student+Center/@42.3590264,-71.0969317,17z/data=!4m8!1m2!2m1!1sStratton+Student+Center,+84+Massachusetts+Ave,+Cambridge,+MA+02139!3m4!1s0x89e370aa862b3beb:0x487c37ec53df273!8m2!3d42.3590389!4d-71.0947637");

  }

function HideMap(){
  document.getElementById("googleMap").style.display="none";
  ArtListView();
}

function ArtListView(){
  document.getElementById("title").innerHTML = "Click the name to open it in Google Maps!";

   document.getElementById("Bmural_name").innerHTML = "'Betances Mural' by Lilli Ann Killen Rosenberg".link("https://www.google.com/maps/place/Villa+Victoria+Center+for+the+Arts/@42.3409714,-71.0779983,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a14829615a9:0x88a5f477009837bf!8m2!3d42.3409714!4d-71.0758096");
   document.getElementById("Bmural_address").innerHTML = "Villa Victoria, 85 W Newton St, Boston, MA 02118";
   document.getElementById("Bmural_information").innerHTML = "'Betances Mural' by Lilli Ann Killen Rosenberg", "Villa Victoria, 85 W Newton St, Boston, MA 02118",
   "This mural highlights the Puerto Rican heritage of many residents in the area.";

   document.getElementById("Gwall_name").innerHTML = "Graffiti Wall".link("https://www.google.com/maps/place/Graffiti+Alley,+Cambridge,+MA+02139/@42.3649259,-71.1044409,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37753f1305c95:0x7a2d7d66fe47b484!8m2!3d42.3649259!4d-71.1022522");
   document.getElementById("Gwall_address").innerHTML = "Graffiti Alley, Cambridge, MA 02139";
   document.getElementById("Gwall_information").innerHTML = "One of the only places where graffiti is legal, the displays on this wall are always changing and are created by different artists.";

   document.getElementById("duck_name").innerHTML = "'Make Way for Ducklings' by Nancy Schon".link("https://www.google.com/maps/place/Boston+Public+Garden/@42.3541614,-71.0725965,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709e822b60bb:0xcbd77f0b5e16e701!8m2!3d42.3541614!4d-71.0704078");
   document.getElementById("duck_address").innerHTML = "Boston Public Garden, Boston, MA 02116"
   document.getElementById("duck_information").innerHTML = "These sculptures are based on the storybook by Robert McCloskey about a family of ducks that moves from the Charles River to the Public Garden’s pond with the help of police controlling traffic.";

   document.getElementById("Tindians_name").innerHTML = "Taino Indians Mural by Rafael Rivera Garcia".link("https://www.google.com/maps/place/10+Perkins+St,+Jamaica+Plain,+MA+02130/@42.3216943,-71.1128405,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3797796199d53:0x442f42d7cd167c18!8m2!3d42.3216943!4d-71.1106518");
   document.getElementById("Tindians_address").innerHTML = "Near 10 Perkins Street, Jamaica Plains, MA 02130";
   document.getElementById("Tindians_information").innerHTML = "This modernist mural illustrates Puerto Rican Taino legends involving multiple gods.";

   document.getElementById("niel_name").innerHTML = "Nieli'ka Mural by Mayor's Crew".link("https://www.google.com/maps/place/674+Centre+St,+Jamaica+Plain,+MA+02130/@42.3121523,-71.1160797,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3796e613ad5ef:0x4fddf0ff0f646c6a!8m2!3d42.3121523!4d-71.113891");
   document.getElementById("niel_address").innerHTML = "674 Centre St, Jamaica Plain, MA 02130";
   document.getElementById("niel_information").innerHTML = "This mural was inspired by a form of Huichol (an indigenous Mexican group) art.";

   document.getElementById("alch_name").innerHTML = "'Alchemist' by Jaume Plensa".link("https://www.google.com/maps/place/Stratton+Student+Center/@42.3590264,-71.0969317,17z/data=!4m8!1m2!2m1!1sStratton+Student+Center,+84+Massachusetts+Ave,+Cambridge,+MA+02139!3m4!1s0x89e370aa862b3beb:0x487c37ec53df273!8m2!3d42.3590389!4d-71.0947637");
   document.getElementById("alch_address").innerHTML = "Stratton Student Center, 84 Massachusetts Ave, Cambridge, MA 02139";
   document.getElementById("alch_information").innerHTML = "This 'thinking' figure is made of stainless steel numbers and mathematical symbol to reflect its roots in MIT.";


   document.getElementById("title").style.display = "block"
  document.getElementById("Bmural_name").style.display = "block";
  document.getElementById("Bmural_address").style.display = "block";
  document.getElementById("Bmural_information").style.display = "block";
  document.getElementById("Bmural_image").style.display = "block";
  document.getElementById("Gwall_name").style.display = "block";
  document.getElementById("Gwall_address").style.display = "block";
  document.getElementById("Gwall_information").style.display = "block";
  document.getElementById("duck_name").style.display = "block";
  document.getElementById("duck_address").style.display = "block";
  document.getElementById("duck_information").style.display = "block";
  document.getElementById("Tindians_name").style.display = "block";
  document.getElementById("Tindians_address").style.display = "block";
  document.getElementById("Tindians_information").style.display = "block";
  document.getElementById("niel_name").style.display = "block";
  document.getElementById("niel_address").style.display = "block";
  document.getElementById("niel_information").style.display = "block";
  document.getElementById("alch_name").style.display = "block";
  document.getElementById("alch_address").style.display = "block";
  document.getElementById("alch_information").style.display = "block";


}


function HideList() {
  document.getElementById("googleMap").style.visibility="visible";
  document.getElementById("title").style.display = "none"
  document.getElementById("Bmural_name").style.display = "none";
  document.getElementById("Bmural_address").style.display = "none";
  document.getElementById("Bmural_information").style.display = "none";
  document.getElementById("Gwall_name").style.display = "none";
  document.getElementById("Gwall_address").style.display = "none";
  document.getElementById("Gwall_information").style.display = "none";
  document.getElementById("duck_name").style.display = "none";
  document.getElementById("duck_address").style.display = "none";
  document.getElementById("duck_information").style.display = "none";
  document.getElementById("Tindians_name").style.display = "none";
  document.getElementById("Tindians_address").style.display = "none";
  document.getElementById("Tindians_information").style.display = "none";
  document.getElementById("niel_name").style.display = "none";
  document.getElementById("niel_address").style.display = "none";
  document.getElementById("niel_information").style.display = "none";
  document.getElementById("alch_name").style.display = "none";
  document.getElementById("alch_address").style.display = "none";
  document.getElementById("alch_information").style.display = "none";
}
