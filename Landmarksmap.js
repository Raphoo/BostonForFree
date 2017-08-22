/*Landmarks MAP*/
function Landmarks() {
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

  var myCenter = new google.maps.LatLng(42.3621,-71.07);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 14};
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

   var BunkerHill = new google.maps.Marker({position:new google.maps.LatLng(42.376211, -71.060862)});
     BunkerHill.setIcon(icon);
 		BunkerHill.setMap(map);
     ClickPin(BunkerHill, "Bunker Hill Monument", "Monument Sq, Charlestown, MA 02129",
     "The famous quote 'Don’t fire till you see the whites of their eyes' was said on this special hill!", "https://www.google.com/maps/place/Bunker+Hill+Monument/@42.3763541,-71.0629651,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370f20b0797ff:0xacaf173272ec0298!8m2!3d42.3763541!4d-71.0607764");

   var OldStateHouse = new google.maps.Marker({position:new google.maps.LatLng(42.358727, -71.057315)});
     OldStateHouse.setIcon(icon);
     OldStateHouse.setMap(map);
     ClickPin(OldStateHouse, "Old State House", "206 Washington St, Boston, MA 02109",
     "The place where the Declaration of Independence was first read to the citizens of Boston.","https://www.google.com/maps/place/Old+State+House,+Boston,+MA+02109/@42.358725,-71.0596638,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37084462079d9:0xe8d8d682a8a884bd!8m2!3d42.358735!4d-71.057454");

   var AcornStreet = new google.maps.Marker({position:new google.maps.LatLng(42.358062, -71.068824)});
     AcornStreet.setIcon(icon);
     AcornStreet.setMap(map);
     ClickPin(AcornStreet, "Acorn Street", "Acorn Street, Acorn St, Boston, MA 02108",
     "A picturesque street that has an old Boston feel to it.", "https://www.google.com/maps/place/Acorn+St,+Boston,+MA+02108/@42.3576147,-71.0710332,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709e95bc5117:0xb85fbb697bc4444a!8m2!3d42.3576147!4d-71.0688445");

   var Holocaust = new google.maps.Marker({position:new google.maps.LatLng(42.361231, -71.057252)});
     Holocaust.setIcon(icon);
     Holocaust.setMap(map);
     ClickPin(Holocaust, "New England Holocaust Memorial by Stanley Saitowitz", "98 Union St, Boston, MA 02129",
     "A memorial dedicated to the Jewish people who were killed by Nazi Germany during the Holocaust.", "https://www.google.com/maps/place/The+New+England+Holocaust+Memorial/@42.3612471,-71.0594404,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370858cbe12f9:0xa66bc66e06095dc8!8m2!3d42.3612471!4d-71.0572517");

   var SciPlaza = new google.maps.Marker({position:new google.maps.LatLng(42.345357, -71.082914)});
     SciPlaza.setIcon(icon);
     SciPlaza.setMap(map);
     ClickPin(SciPlaza, "Christian Science Plaza", "250 Massachusetts Ave",
     "A beautiful place to relax and enjoy the fountain and reflecting pool.", "https://www.google.com/maps/place/Christian+Science+Plaza,+Boston/@42.3445801,-71.0864757,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a1084a9ffff:0x2e36a19dfb08ee1d!8m2!3d42.3445801!4d-71.084287");

   var TrinityChurch =  new google.maps.Marker({position:new google.maps.LatLng(42.349842, -71.076165)});
     TrinityChurch.setIcon(icon);
     TrinityChurch.setMap(map);
     ClickPin(TrinityChurch, "Trinity Church", "206 Clarendon St, Boston, MA 02116",
     "An beautiful Episcopal church in Copley Square. Great for pictures.", "https://www.google.com/maps/place/Trinity+Church/@42.3499893,-71.0776848,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a0c88e1848f:0x61a963c91eb2b6c!8m2!3d42.3499893!4d-71.0754961");

   var USSConstMuseum =  new google.maps.Marker({position:new google.maps.LatLng(42.349842, -71.076165)});
     USSConstMuseum.setIcon(icon);
     USSConstMuseum.setMap(map);
     ClickPin(USSConstMuseum, "USS Constitution Museum", "Building 22, Charlestown Navy Yard, Charlestown, MA 02129",
     "Located next to the USS Constitution ship, this museum reveals details about the ship's past and life at sea. Reserve a free pass for up to nine people from a Boston Public Library with a library card, which any Massachusetts resident can hold.", "https://www.google.com/maps/place/USS+Constitution+Museum/@42.3739796,-71.0576126,17z/data=!3m2!4b1!5s0x89e370f476d7b987:0xc1feffabf31cd935!4m5!3m4!1s0x89e370f4778a4f39:0xa5c2057045470ca5!8m2!3d42.3739796!4d-71.0554239");
 }






function HideMap(){
  document.getElementById("googleMap").style.display="none";
  LandmarksListView();

}

function LandmarksListView(){

  document.getElementById("title").innerHTML ="Click the name to open it in Google Maps!";

  document.getElementById("BH_name").innerHTML = "Bunker Hill Monument".link("https://www.google.com/maps/place/Bunker+Hill+Monument/@42.3763541,-71.0629651,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370f20b0797ff:0xacaf173272ec0298!8m2!3d42.3763541!4d-71.0607764");
  document.getElementById("BH_address").innerHTML = "Monument Sq, Charlestown, MA 02129";
  document.getElementById("BH_info").innerHTML = "The famous quote 'Don't fire till you see the whites of their eyes' was said on this special hill!";

  document.getElementById("OldState_name").innerHTML = "Old State House".link("https://www.google.com/maps/place/Old+State+House,+Boston,+MA+02109/@42.358725,-71.0596638,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37084462079d9:0xe8d8d682a8a884bd!8m2!3d42.358735!4d-71.057454");
  document.getElementById("OldState_address").innerHTML = "206 Washington St, Boston, MA 02109";
  document.getElementById("OldState_info").innerHTML = "The place where the Declaration of Independence was first read to the citizens of Boston.";

  document.getElementById("Acorn_name").innerHTML = "Acorn Street".link("https://www.google.com/maps/place/Acorn+St,+Boston,+MA+02108/@42.3576147,-71.0710332,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709e95bc5117:0xb85fbb697bc4444a!8m2!3d42.3576147!4d-71.0688445");
  document.getElementById("Acorn_address").innerHTML =  "Acorn Street, Acorn St, Boston, MA 02108";
  document.getElementById("Acorn_info").innerHTML = "A picturesque street that has an old Boston feel to it.";

  document.getElementById("Holo_name").innerHTML = "New England Holocaust Memorial by Stanley Saitowitz".link("https://www.google.com/maps/place/The+New+England+Holocaust+Memorial/@42.3612471,-71.0594404,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370858cbe12f9:0xa66bc66e06095dc8!8m2!3d42.3612471!4d-71.0572517");
  document.getElementById("Holo_address").innerHTML = "98 Union St, Boston, MA 02129";
  document.getElementById("Holo_info").innerHTML = "A memorial dedicated to the Jewish people who were killed by Nazi Germany during the Holocaust.";

  document.getElementById("SciP_name").innerHTML = "Christian Science Plaza".link("https://www.google.com/maps/place/Christian+Science+Plaza,+Boston/@42.3445801,-71.0864757,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a1084a9ffff:0x2e36a19dfb08ee1d!8m2!3d42.3445801!4d-71.084287");
  document.getElementById("SciP_address").innerHTML =  "250 Massachusetts Ave";
  document.getElementById("SciP_info").innerHTML = "A beautiful place to relax and enjoy the fountain and reflecting pool";

  document.getElementById("Trin_name").innerHTML = " Trinity Church".link("https://www.google.com/maps/place/Trinity+Church/@42.3499893,-71.0776848,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a0c88e1848f:0x61a963c91eb2b6c!8m2!3d42.3499893!4d-71.0754961");
  document.getElementById("Trin_address").innerHTML = "206 Clarendon St, Boston, MA 02116";
  document.getElementById("Trin_info").innerHTML = "An beautiful Episcopal church in Copley Square. Great for pictures.";

  document.getElementById("USSCon_name").innerHTML = "USS Constitution Museum".link("https://www.google.com/maps/place/USS+Constitution+Museum/@42.3739796,-71.0576126,17z/data=!3m2!4b1!5s0x89e370f476d7b987:0xc1feffabf31cd935!4m5!3m4!1s0x89e370f4778a4f39:0xa5c2057045470ca5!8m2!3d42.3739796!4d-71.0554239");
  document.getElementById("USSCon_address").innerHTML = "Building 22, Charlestown Navy Yard, Charlestown, MA 02129";
  document.getElementById("USSCon_info").innerHTML = "Located next to the USS Constitution ship, this museum reveals details about the ship's past and life at sea. Reserve a free pass for up to nine people from a Boston Public Library with a library card, which any Massachusetts resident can hold.";

  document.getElementById("title").style.display="block";

  document.getElementById("BH_name").style.display="block";
  document.getElementById("BH_address").style.display="block";
  document.getElementById("BH_info").style.display="block";

  document.getElementById("OldState_name").style.display="block";
  document.getElementById("OldState_address").style.display="block";
  document.getElementById("OldState_info").style.display="block";

  document.getElementById("Acorn_name").style.display="block";
  document.getElementById("Acorn_address").style.display="block";
  document.getElementById("Acorn_info").style.display="block";

  document.getElementById("SciP_name").style.display="block";
  document.getElementById("SciP_address").style.display="block";
  document.getElementById("SciP_info").style.display="block";

  document.getElementById("Holo_name").style.display="block";
  document.getElementById("Holo_address").style.display="block";
  document.getElementById("Holo_info").style.display="block";

  document.getElementById("Trin_name").style.display="block";
  document.getElementById("Trin_address").style.display="block";
  document.getElementById("Trin_info").style.display="block";

  document.getElementById("USSCon_name").style.display="block";
  document.getElementById("USSCon_address").style.display="block";
  document.getElementById("USSCon_info").style.display="block";

}
function HideList(){
  document.getElementById("googleMap").style.display="block";

  document.getElementById("title").style.display="none";

  document.getElementById("BH_name").style.display="none";
  document.getElementById("BH_address").style.display="none";
  document.getElementById("BH_info").style.display="none";

  document.getElementById("OldState_name").style.display="none";
  document.getElementById("OldState_address").style.display="none";
  document.getElementById("OldState_info").style.display="none";

  document.getElementById("Acorn_name").style.display="none";
  document.getElementById("Acorn_address").style.display="none";
  document.getElementById("Acorn_info").style.display="none";

  document.getElementById("SciP_name").style.display="none";
  document.getElementById("SciP_address").style.display="none";
  document.getElementById("SciP_info").style.display="none";

  document.getElementById("Holo_name").style.display="none";
  document.getElementById("Holo_address").style.display="none";
  document.getElementById("Holo_info").style.display="none";

  document.getElementById("Trin_name").style.display="none";
  document.getElementById("Trin_address").style.display="none";
  document.getElementById("Trin_info").style.display="none";

  document.getElementById("USSCon_name").style.display="none";
  document.getElementById("USSCon_address").style.display="none";
  document.getElementById("USSCon_info").style.display="none";

}
