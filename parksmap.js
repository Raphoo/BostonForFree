/*PARKS MAP*/
function Parks() {
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



  var myCenter = new google.maps.LatLng(42.3521,-71.07);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 14};
  var map = new google.maps.Map(mapCanvas, mapOptions)
    mapTypeControlOptions: {mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
};

  var infowindow = new google.maps.InfoWindow();
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');


  var icon = {
    url: "NewGrayPin.png", // url
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


    var BostonPGarden = new google.maps.Marker({position:new google.maps.LatLng(42.354082, -71.069979)});
      BostonPGarden.setIcon(icon);
      BostonPGarden.setMap(map);
      ClickPin(BostonPGarden, "Boston Public Garden", "4 Charles St, Boston, MA 02116",
      "This is a large park in the heart of Boston that is adjacent to the Boston Common.",
       "https://www.google.com/maps/place/Boston+Public+Garden/@42.3541614,-71.0726018,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709e822b60bb:0xcbd77f0b5e16e701!8m2!3d42.3541614!4d-71.0704078");

  	var BostonCommon = new google.maps.Marker({position:new google.maps.LatLng(42.355200, -71.065832)});
      BostonCommon.setIcon(icon);
      BostonCommon.setMap(map);
      ClickPin(BostonCommon, "Boston Common", "139 Tremont St, Boston, MA 02111",
      "This is a large park in the center of Boston and the oldest park in the city, dating back to 1634.",
       "https://www.google.com/maps/place/Boston+Common/@42.3549544,-71.0676826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709dbc6e232b:0x3f8683fc7ba94f04!8m2!3d42.3549544!4d-71.0654886");

    var PetersPark = new google.maps.Marker({position:new google.maps.LatLng(42.342483, -71.067743)});
      PetersPark.setIcon(icon);
      PetersPark.setMap(map);
      ClickPin(PetersPark, "Peters Park", "1277 Washington St, Boston, MA 02118",
      "This is small community park which includes a children's playground, baseball field,off-leash dog run, and basketball field.",
       "https://www.google.com/maps/place/Peters+Park/@42.3422686,-71.0699374,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a6e0b463c17:0x9d8bd0de0c0845c1!8m2!3d42.3422686!4d-71.0677434");

    var WharfDistrictPark = new google.maps.Marker({position:new google.maps.LatLng(42.358334, -71.051777)});
      WharfDistrictPark.setIcon(icon);
      WharfDistrictPark.setMap(map);
      ClickPin(WharfDistrictPark, "Wharf District Park", "Boston, MA 02109",
      "Urban park with open lawns, benches, and fountains.",
       "https://www.google.com/maps/place/Wharf+District+Park/@42.3585001,-71.0540136,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37087a59ad135:0xaa9957bd0b75cd23!8m2!3d42.3585001!4d-71.0518196");

  	var RamlerPark = new google.maps.Marker({position:new google.maps.LatLng(42.342458, -71.100790)});
      RamlerPark.setIcon(icon);
      RamlerPark.setMap(map);
      ClickPin(RamlerPark, "Ramler Park", "Boston, MA 02109",
      "A little Sanctuary away from the bustling streets. Perfect for children.",
       "https://www.google.com/maps/place/Ramler+Park/@42.3425691,-71.1028985,17z/data=!3m1!4b1!4m5!3m4!1s0x89e379f4fbc75723:0x57ee8972408cd153!8m2!3d42.3425691!4d-71.1007045");

  	var FriedaGarciaPark = new google.maps.Marker({position:new google.maps.LatLng(42.348125, -71.073659)});
      FriedaGarciaPark.setIcon(icon);
      FriedaGarciaPark.setMap(map);
      ClickPin(FriedaGarciaPark, "Frieda Garcia Park", "45 Stanhope St, Boston, MA 02116",
      "Perfect park for children with art installations and a modern playground.",
      "https://www.google.com/maps/place/Frieda+Garcia+Park/@42.3481644,-71.0756487,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a732ceca05f:0xe899943925f62ccc!8m2!3d42.3481644!4d-71.0734547");

  	var ArmenianHeritagePark = new google.maps.Marker({position:new google.maps.LatLng(42.360817, -71.053334)});
      ArmenianHeritagePark.setIcon(icon);
      ArmenianHeritagePark.setMap(map);
      ClickPin(ArmenianHeritagePark, "Armenian Heritage Park", "Rose Fitzgerald Kennedy Greenway, Boston, MA 02109",
      "A memorial park dedicated to the victims of the Armenian Genocide. Includes a maze that children would enjoy.",
      "https://www.google.com/maps/place/Armenian+Heritage+Park/@42.3608908,-71.0554065,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3708629be4eb7:0x451ade87a2a4f1b!8m2!3d42.3608908!4d-71.0532125");

   	var LawnonD = new google.maps.Marker({position:new google.maps.LatLng(42.344224, -71.044933)});
      LawnonD.setIcon(icon);
      LawnonD.setMap(map);
      ClickPin(LawnonD, "Lawn on D", "420 D St, Boston, MA 02210",
      "Nice outdoor space featuring large glow up swings and seasonal love music. Perfect for millennials.",
       "https://www.google.com/maps/place/The+Lawn+on+D/@42.3444226,-71.0471382,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a86be93faff:0x5577fb629400bf46!8m2!3d42.3444226!4d-71.0449442");
  }




function HideMap(){

  document.getElementById('googleMap').style.display = "none";
  ParkListView();
}







  function ParkListView(){

    document.getElementById("title").innerHTML = "Click the name to open it in Google Maps!"

    document.getElementById("BostonPGarden_name").innerHTML = "Boston Public Garden".link("https://www.google.com/maps/place/Boston+Public+Garden/@42.3541614,-71.0726018,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709e822b60bb:0xcbd77f0b5e16e701!8m2!3d42.3541614!4d-71.0704078");
    document.getElementById('BostonPGarden_address').innerHTML = '4 Charles St, Boston, MA 02116';
    document.getElementById('BostonPGarden_information').innerHTML = 'This is a large park in the heart of Boston that is adjacent to the Boston Common.';



    document.getElementById('BostonCommon_name').innerHTML = 'Boston Common'.link("https://www.google.com/maps/place/Boston+Common/@42.3549544,-71.0676826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3709dbc6e232b:0x3f8683fc7ba94f04!8m2!3d42.3549544!4d-71.0654886");
    document.getElementById('BostonCommon_address').innerHTML = '139 Tremont St, Boston, MA 02111';
    document.getElementById('BostonCommon_information').innerHTML = 'This is a large park in the center of Boston and the oldest park in the city, dating back to 1634.';

    document.getElementById('PetersPark_name').innerHTML = 'Peters Park'.link("https://www.google.com/maps/place/Peters+Park/@42.3422686,-71.0699374,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a6e0b463c17:0x9d8bd0de0c0845c1!8m2!3d42.3422686!4d-71.0677434");
    document.getElementById('PetersPark_address').innerHTML = '1277 Washington St, Boston, MA 02118';
    document.getElementById('PetersPark_information').innerHTML = "This is small community park which includes a children's playground, baseball field,off-leash dog run, and basketball field.";

    document.getElementById('WharfDistrictPark_name').innerHTML = 'Wharf District Park'.link( "https://www.google.com/maps/place/Wharf+District+Park/@42.3585001,-71.0540136,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37087a59ad135:0xaa9957bd0b75cd23!8m2!3d42.3585001!4d-71.0518196");
    document.getElementById('WharfDistrictPark_address').innerHTML = 'Boston, MA 02109';
    document.getElementById('WharfDistrictPark_information').innerHTML = 'Urban park with open lawns, benches, and fountains.';

    document.getElementById('RamlerPark_name').innerHTML = 'Ramler Park'.link("https://www.google.com/maps/place/Ramler+Park/@42.3425691,-71.1028985,17z/data=!3m1!4b1!4m5!3m4!1s0x89e379f4fbc75723:0x57ee8972408cd153!8m2!3d42.3425691!4d-71.1007045");
    document.getElementById('RamlerPark_address').innerHTML = 'Boston, MA 02109';
    document.getElementById('RamlerPark_information').innerHTML = 'A little Sanctuary away from the bustling streets. Perfect for children.';

    document.getElementById('FriedaGarciaPark_name').innerHTML = 'Frieda Garcia Park'.link("https://www.google.com/maps/place/Frieda+Garcia+Park/@42.3481644,-71.0756487,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a732ceca05f:0xe899943925f62ccc!8m2!3d42.3481644!4d-71.0734547");
    document.getElementById('FriedaGarciaPark_address').innerHTML = '45 Stanhope St, Boston, MA 02116';
    document.getElementById('FriedaGarciaPark_information').innerHTML = 'Perfect park for children with art installations and a modern playground.';

    document.getElementById('ArmenianHeritagePark_name').innerHTML = 'Armenian Heritage Park'.link("https://www.google.com/maps/place/Armenian+Heritage+Park/@42.3608908,-71.0554065,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3708629be4eb7:0x451ade87a2a4f1b!8m2!3d42.3608908!4d-71.0532125");
    document.getElementById('ArmenianHeritagePark_address').innerHTML = 'Rose Fitzgerald Kennedy Greenway, Boston, MA 02109';
    document.getElementById('ArmenianHeritagePark_information').innerHTML = 'A memorial park dedicated to the victims of the Armenian Genocide. Includes a maze that children would enjoy.';

    document.getElementById('LawnonD_name').innerHTML = 'Lawn on D'.link("https://www.google.com/maps/place/The+Lawn+on+D/@42.3444226,-71.0471382,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a86be93faff:0x5577fb629400bf46!8m2!3d42.3444226!4d-71.0449442");
    document.getElementById('LawnonD_address').innerHTML = '420 D St, Boston, MA 02210';
    document.getElementById('LawnonD_information').innerHTML = 'Nice outdoor space featuring large glow up swings and seasonal love music. Perfect for millennials.';



  document.getElementById("title").style.display="block";
  document.getElementById('BostonPGarden_name').style.display = "block";
  document.getElementById('BostonPGarden_address').style.display = "block";
  document.getElementById('BostonPGarden_information').style.display = "block";
  document.getElementById('BostonCommon_name').style.display = "block";
  document.getElementById('BostonCommon_address').style.display = "block";
  document.getElementById('BostonCommon_information').style.display = "block";
  document.getElementById('PetersPark_name').style.display = "block";
  document.getElementById('PetersPark_address').style.display = "block";
  document.getElementById('PetersPark_information').style.display = "block";
  document.getElementById('WharfDistrictPark_name').style.display = "block";
  document.getElementById('WharfDistrictPark_address').style.display = "block";
  document.getElementById('WharfDistrictPark_information').style.display = "block";
  document.getElementById('RamlerPark_name').style.display = "block";
  document.getElementById('RamlerPark_address').style.display = "block";
  document.getElementById('RamlerPark_information').style.display = "block";
  document.getElementById('FriedaGarciaPark_name').style.display = "block";
  document.getElementById('FriedaGarciaPark_address').style.display = "block";
  document.getElementById('FriedaGarciaPark_information').style.display = "block";
  document.getElementById('ArmenianHeritagePark_name').style.display = "block";
  document.getElementById('ArmenianHeritagePark_address').style.display = "block";
  document.getElementById('ArmenianHeritagePark_information').style.display = "block";
  document.getElementById('LawnonD_name').style.display = "block";
  document.getElementById('LawnonD_address').style.display = "block";
  document.getElementById('LawnonD_information').style.display = "block";
}

function HideList(){
  document.getElementById('googleMap').style.display = "block";
  document.getElementById("title").style.display="none";
  document.getElementById('BostonPGarden_name').style.display = "none";
  document.getElementById('BostonPGarden_address').style.display = "none";
  document.getElementById('BostonPGarden_information').style.display = "none";
  document.getElementById('BostonCommon_name').style.display = "none";
  document.getElementById('BostonCommon_address').style.display = "none";
  document.getElementById('BostonCommon_information').style.display = "none";
  document.getElementById('PetersPark_name').style.display = "none";
  document.getElementById('PetersPark_address').style.display = "none";
  document.getElementById('PetersPark_information').style.display = "none";
  document.getElementById('WharfDistrictPark_name').style.display = "none";
  document.getElementById('WharfDistrictPark_address').style.display = "none";
  document.getElementById('WharfDistrictPark_information').style.display = "none";
  document.getElementById('RamlerPark_name').style.display = "none";
  document.getElementById('RamlerPark_address').style.display = "none";
  document.getElementById('RamlerPark_information').style.display = "none";
  document.getElementById('FriedaGarciaPark_name').style.display = "none";
  document.getElementById('FriedaGarciaPark_address').style.display = "none";
  document.getElementById('FriedaGarciaPark_information').style.display = "none";
  document.getElementById('ArmenianHeritagePark_name').style.display = "none";
  document.getElementById('ArmenianHeritagePark_address').style.display = "none";
  document.getElementById('ArmenianHeritagePark_information').style.display = "none";
  document.getElementById('LawnonD_name').style.display = "none";
  document.getElementById('LawnonD_address').style.display = "none";
  document.getElementById('LawnonD_information').style.display = "none";




}
