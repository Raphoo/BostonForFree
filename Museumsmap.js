/*MUSEUMS MAP*/
function Museums() {
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

  var myCenter = new google.maps.LatLng(42.3661,-71.1);
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

    var BadArtMuseum = new google.maps.Marker({position:new google.maps.LatLng(42.396706, -71.123022)});
      BadArtMuseum.setIcon(icon);
      BadArtMuseum.setMap(map);
      ClickPin(BadArtMuseum, "Museum of Bad Art", "55 Davis Square, Somerville, MA 02144",
      "This museum display the work of artists that would not be shown elsewhere.",
      "https://www.google.com/maps/place/The+Museum+Of+Bad+Art/@42.3967018,-71.125218,17z/data=!4m12!1m6!3m5!1s0x89e38075edb75cb5:0x1623e2e9e28cfb10!2sThe+Museum+Of+Bad+Art!8m2!3d42.3966979!4d-71.1230347!3m4!1s0x89e38075edb75cb5:0x1623e2e9e28cfb10!8m2!3d42.3966979!4d-71.1230347");


    var MFA = new google.maps.Marker({position:new google.maps.LatLng(42.339555, -71.093962)});
      MFA.setIcon(icon);
      MFA.setMap(map);
      ClickPin(MFA, "Museum of Fine Arts", "465 Huntington Ave, Boston, MA 02115",
      "Free to all Wednesday nights after 4! Youth 17 and under get free admission daily after 3, weekends, and public school holidays.",
      "https://www.google.com/maps/place/Museum+of+Fine+Arts,+Boston/@42.339381,-71.094048,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a0de7e77a4b:0x2f033fd6c495d564!8m2!3d42.339381!4d-71.094048");

    var HarvardArt = new google.maps.Marker({position:new google.maps.LatLng(42.374191,  -71.114115)});
      HarvardArt.setIcon(icon);
      HarvardArt.setMap(map);
      ClickPin(HarvardArt, "Harvard Art Museums", "32 Quincy St, Cambridge, MA 02138",
      "MA residents get free admission every Wednesday from 3pm-5pm (September through May). Bring ID!",
      "https://www.google.com/maps/place/Harvard+Art+Museums/@42.3741274,-71.1140716,17z/data=!3m1!4b1!4m5!3m4!1s0x89e377446c17ffa9:0x3ea24d53829c6322!8m2!3d42.3741274!4d-71.1140716");

    var ICA = new google.maps.Marker({position:new google.maps.LatLng(42.353040, -71.042925)});
      ICA.setIcon(icon);
    	ICA.setMap(map);
      ClickPin(ICA, "The Institute Of Contemporary Art", "25 Harbor Shore Drive, Boston, MA 02210",
      "This contemporary Museum looks over the Harbor. People usually spend 1.5 hours there. Youth 17 and under: FREE. Admission is FREE for all every Thursday from 5 to 9 PM during ICA Free Thursday Nights.",
      "https://www.google.com/maps/place/The+Institute+Of+Contemporary+Art/@42.3528824,-71.043011,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370793a8430c5:0x7ab1059322edd33a!8m2!3d42.3528824!4d-71.043011");

    var HarvardNat = new google.maps.Marker({position:new google.maps.LatLng(42.378677, -71.115547)});
      HarvardNat.setIcon(icon);
      HarvardNat.setMap(map);
      ClickPin(HarvardNat, "Harvard Museum of Natural History", "26 Oxford St, Cambridge, MA 02138",
      "Right on the grounds of Harvard. People usually spend 1 hour here. Great for people of all ages.",
      "https://www.google.com/maps/place/Harvard+Museum+of+Natural+History/@42.3784626,-71.1155576,17z/data=!3m1!4b1!4m5!3m4!1s0x89e377412f2ed67b:0x613d8c4648bcba7b!8m2!3d42.3784626!4d-71.1155576");

    var BostonFire = new google.maps.Marker({position:new google.maps.LatLng(42.350787, -71.048231)});
      BostonFire.setIcon(icon);
      BostonFire.setMap(map);
      ClickPin(BostonFire, "Boston Fire Museum", "344 Congress St, Boston, MA 02210",
      "Admission is free on Saturdays from 11am-6pm.",
      "https://www.google.com/maps/place/Boston+Fire+Museum/@42.3507635,-71.0488532,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3707ff62ce797:0xc7579525550a4e1f!8m2!3d42.3507635!4d-71.0488532");

    var WaterWorks = new google.maps.Marker({position:new google.maps.LatLng(42.331890, -71.155562)});
      WaterWorks.setIcon(icon);
      WaterWorks.setMap(map);
      ClickPin(WaterWorks, "Metropolitan Waterworks Museum", "2450 Beacon St, Chestnut Hill, MA 02467",
      "Learn about the country’s first water system! Admission is always free!",
      "https://www.google.com/maps/place/Metropolitan+Waterworks+Museum/@42.3317391,-71.1555402,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37857c1c3f2c5:0xe97e49e909989bac!8m2!3d42.3317391!4d-71.1555402");

  	var TinyMuseum = new google.maps.Marker({position:new google.maps.LatLng(42.379911, -71.094862)});
      TinyMuseum.setIcon(icon);
      TinyMuseum.setMap(map);
      ClickPin(TinyMuseum, "The Mµseum", "71 Union Square, Somerville, MA 02143",
      "A tiny museum dedicated to local artists. Admission is always free!",
      "https://www.google.com/maps/place/The+M%C2%B5seum/@42.3798317,-71.0949262,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370cafcd02b17:0xe21ebbda83f7d2ef!8m2!3d42.3798317!4d-71.0949262");

    var PeabodyArch = new google.maps.Marker({position:new google.maps.LatLng(42.378384, -71.114677)});
      PeabodyArch.setIcon(icon);
    	PeabodyArch.setMap(map);
      ClickPin(PeabodyArch, "Peabody Museum of Archaeology and Ethnology", "11 Divinity Ave, Cambridge, MA 0213",
      "A museum affiliated with Harvard University with an impressive collections of artifacts. People usually spend 45 minutes here.",
      "https://www.google.com/maps/place/Peabody+Museum+of+Archaeology+and+Ethnology/@42.3781623,-71.1149773,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37746d15ee397:0x120a9da97291d878!8m2!3d42.3781623!4d-71.1149773");

      var MuseumScience = new google.maps.Marker({position:new google.maps.LatLng(42.367956, -71.070838)});
      MuseumScience.setIcon(icon);
      MuseumScience.setMap(map);
      ClickPin(MuseumScience, "Museum of Science", "1 Science Park, Boston, MA 02114",
      "This museum has many exhibits on the science that surrounds us. Reserve a free pass for four people from a Boston Public Library with a library card, which any Massachusetts resident can hold. You can also stargaze for free at a rooftop observatory from 8:30pm-10:00pm!",
      "https://www.google.com/maps/place/Museum+of+Science/@42.3676867,-71.0709238,17z/data=!3m2!4b1!5s0x89e370965c480dfd:0x64dca853c1ad7225!4m5!3m4!1s0x89e37096418c1c2f:0x57bac693677036c5!8m2!3d42.3676867!4d-71.0709238");

  }

function HideMap(){

  document.getElementById("googleMap").style.display = "none";
  MuseumsListView();
}

function MuseumsListView(){
  document.getElementById("title").innerHTML = "Click the name to open it in Google Maps!";

    document.getElementById("BAM_name").innerHTML = "Bad Art Museum".link("https://www.google.com/maps/place/The+Museum+Of+Bad+Art/@42.3967018,-71.125218,17z/data=!4m12!1m6!3m5!1s0x89e38075edb75cb5:0x1623e2e9e28cfb10!2sThe+Museum+Of+Bad+Art!8m2!3d42.3966979!4d-71.1230347!3m4!1s0x89e38075edb75cb5:0x1623e2e9e28cfb10!8m2!3d42.3966979!4d-71.1230347");
    document.getElementById("BAM_address").innerHTML = "55 Davis Square, Somerville, MA 02144";
    document.getElementById("BAM_information").innerHTML = "This museum display the work of artists that would not be shown elsewhere.";

    document.getElementById("MFA_name").innerHTML = "Museum of Fine Arts".link("https://www.google.com/maps/place/Museum+of+Fine+Arts,+Boston/@42.339381,-71.094048,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a0de7e77a4b:0x2f033fd6c495d564!8m2!3d42.339381!4d-71.094048");
    document.getElementById("MFA_address").innerHTML = "465 Huntington Ave, Boston, MA 02115";
    document.getElementById("MFA_information").innerHTML = "Free to all Wednesday nights after 4! Youth 17 and under get free admission daily after 3, weekends, and public school holidays.";

    document.getElementById("HAM_name").innerHTML = "Harvard Art Museum".link("https://www.google.com/maps/place/Harvard+Art+Museums/@42.3741274,-71.1140716,17z/data=!3m1!4b1!4m5!3m4!1s0x89e377446c17ffa9:0x3ea24d53829c6322!8m2!3d42.3741274!4d-71.1140716");
    document.getElementById("HAM_address").innerHTML = "32 Quincy St, Cambridge, MA 02138";
    document.getElementById("HAM_information").innerHTML = "MA residents get free admission every Wednesday from 3pm-5pm (September through May). Bring ID! ";

    document.getElementById("ICA_name").innerHTML = "Institute of Contemporary Art".link("https://www.google.com/maps/place/The+Institute+Of+Contemporary+Art/@42.3528824,-71.043011,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370793a8430c5:0x7ab1059322edd33a!8m2!3d42.3528824!4d-71.043011");
    document.getElementById("ICA_address").innerHTML = "25 Harbor Shore Drive, Boston, MA 02210";
    document.getElementById("ICA_information").innerHTML = "This contemporary Museum looks over the Harbor. People usually spend 1.5 hours there. Youth 17 and under: FREE. Admission is FREE for all every Thursday from 5 to 9 PM during ICA Free Thursday Nights.";

    document.getElementById("NatHis_name").innerHTML = "Harvard Museum of Natural History".link("https://www.google.com/maps/place/Harvard+Museum+of+Natural+History/@42.3784626,-71.1155576,17z/data=!3m1!4b1!4m5!3m4!1s0x89e377412f2ed67b:0x613d8c4648bcba7b!8m2!3d42.3784626!4d-71.1155576");
    document.getElementById("NatHis_address").innerHTML = "26 Oxford St, Cambridge, MA 02138";
    document.getElementById("NatHis_information").innerHTML = "Right on the grounds of Harvard. People usually spend 1 hour here. Great for people of all ages.";

    document.getElementById("FireMus_name").innerHTML = "Boston Museum of Fire".link("https://www.google.com/maps/place/Boston+Fire+Museum/@42.3507635,-71.0488532,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3707ff62ce797:0xc7579525550a4e1f!8m2!3d42.3507635!4d-71.0488532");
    document.getElementById("FireMus_address").innerHTML = "344 Congress St, Boston, MA 02210";
    document.getElementById("FireMus_information").innerHTML = "Admission is free on Saturdays from 11am-6pm.";

    document.getElementById("MetWat_name").innerHTML = "Metropolitan Waterworks Museum".link("https://www.google.com/maps/place/Metropolitan+Waterworks+Museum/@42.3317391,-71.1555402,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37857c1c3f2c5:0xe97e49e909989bac!8m2!3d42.3317391!4d-71.1555402");
    document.getElementById("MetWat_address").innerHTML = "2450 Beacon St, Chestnut Hill, MA 02467";
    document.getElementById("MetWat_information").innerHTML = "Learn about the country’s first water system! Admission is always free!";

    document.getElementById("TinMus_name").innerHTML = "The Mµseum".link("https://www.google.com/maps/place/The+M%C2%B5seum/@42.3798317,-71.0949262,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370cafcd02b17:0xe21ebbda83f7d2ef!8m2!3d42.3798317!4d-71.0949262");
    document.getElementById("TinMus_address").innerHTML = "71 Union Square, Somerville, MA 02143";
    document.getElementById("TinMus_information").innerHTML = "A tiny museum dedicated to local artists. Admission is always free!";

    document.getElementById("PBM_name").innerHTML = "Peabody Museum of Archaeology and Ethnology".link("https://www.google.com/maps/place/Peabody+Museum+of+Archaeology+and+Ethnology/@42.3781623,-71.1149773,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37746d15ee397:0x120a9da97291d878!8m2!3d42.3781623!4d-71.1149773");
    document.getElementById("PBM_address").innerHTML = "11 Divinity Ave, Cambridge, MA 0213";
    document.getElementById("PBM_information").innerHTML = "A museum affiliated with Harvard University with an impressive collections of artifacts. People usually spend 45 minutes here.";

    document.getElementById("MusSci_name").innerHTML = "Museum of Science".link("https://www.google.com/maps/place/Museum+of+Science/@42.3676867,-71.0709238,17z/data=!3m2!4b1!5s0x89e370965c480dfd:0x64dca853c1ad7225!4m5!3m4!1s0x89e37096418c1c2f:0x57bac693677036c5!8m2!3d42.3676867!4d-71.0709238");
    document.getElementById("MusSci_address").innerHTML = "1 Science Park, Boston, MA 02114";
    document.getElementById("MusSci_information").innerHTML = "This museum has many exhibits on the science that surrounds us. Reserve a free pass for four people from a Boston Public Library with a library card, which any Massachusetts resident can hold. You can also stargaze for free at a rooftop observatory from 8:30pm-10:00pm!";

  document.getElementById("title").style.display = "block";
  document.getElementById("BAM_name").style.display = "block";
  document.getElementById("BAM_address").style.display = "block";
  document.getElementById("BAM_information").style.display = "block";
  document.getElementById("MFA_name").style.display = "block";
  document.getElementById("MFA_address").style.display = "block";
  document.getElementById("MFA_information").style.display = "block";
  document.getElementById("HAM_name").style.display = "block";
  document.getElementById("HAM_address").style.display = "block";
  document.getElementById("HAM_information").style.display = "block";
  document.getElementById("ICA_name").style.display = "block";
  document.getElementById("ICA_address").style.display = "block";
  document.getElementById("ICA_information").style.display = "block";
  document.getElementById("NatHis_name").style.display = "block";
  document.getElementById("NatHis_address").style.display = "block";
  document.getElementById("NatHis_information").style.display = "block";
  document.getElementById("FireMus_name").style.display = "block";
  document.getElementById("FireMus_address").style.display = "block";
  document.getElementById("FireMus_information").style.display = "block";
  document.getElementById("MetWat_name").style.display = "block";
  document.getElementById("MetWat_address").style.display = "block";
  document.getElementById("MetWat_information").style.display = "block";
  document.getElementById("TinMus_name").style.display = "block";
  document.getElementById("TinMus_address").style.display = "block";
  document.getElementById("TinMus_information").style.display = "block";
  document.getElementById("PBM_name").style.display = "block";
  document.getElementById("PBM_address").style.display = "block";
  document.getElementById("PBM_information").style.display = "block";
  document.getElementById("MusSci_name").style.display = "block";
  document.getElementById("MusSci_address").style.display = "block";
  document.getElementById("MusSci_information").style.display = "block";

}
function HideList() {
  document.getElementById("googleMap").style.display = "block";
  document.getElementById("title").style.display="none";
  document.getElementById("BAM_name").style.display = "none";
  document.getElementById("BAM_address").style.display = "none";
  document.getElementById("BAM_information").style.display = "none";
  document.getElementById("MFA_name").style.display = "none";
  document.getElementById("MFA_address").style.display = "none";
  document.getElementById("MFA_information").style.display = "none";
  document.getElementById("HAM_name").style.display = "none";
  document.getElementById("HAM_address").style.display = "none";
  document.getElementById("HAM_information").style.display = "none";
  document.getElementById("ICA_name").style.display = "none";
  document.getElementById("ICA_address").style.display = "none";
  document.getElementById("ICA_information").style.display = "none";
  document.getElementById("NatHis_name").style.display = "none";
  document.getElementById("NatHis_address").style.display = "none";
  document.getElementById("NatHis_information").style.display = "none";
  document.getElementById("FireMus_name").style.display = "none";
  document.getElementById("FireMus_address").style.display = "none";
  document.getElementById("FireMus_information").style.display = "none";
  document.getElementById("MetWat_name").style.display = "none";
  document.getElementById("MetWat_address").style.display = "none";
  document.getElementById("MetWat_information").style.display = "none";
  document.getElementById("TinMus_name").style.display = "none";
  document.getElementById("TinMus_address").style.display = "none";
  document.getElementById("TinMus_information").style.display = "none";
  document.getElementById("PBM_name").style.display = "none";
  document.getElementById("PBM_address").style.display = "none";
  document.getElementById("PBM_information").style.display = "none";
  document.getElementById("MusSci_name").style.display = "none";
  document.getElementById("MusSci_address").style.display = "none";
  document.getElementById("MusSci_information").style.display = "none";

}
