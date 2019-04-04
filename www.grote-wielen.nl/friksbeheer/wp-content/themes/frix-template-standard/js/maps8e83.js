var map;
function initialize() {

	var mapOptions = {
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		mapTypeControl: false,
		zoom: 16,
		zoomControl: false,
		panControl: false,
		streetViewControl: false,
		scaleControl: false,
		overviewMapControl: false,
		center: new google.maps.LatLng(mapslocation.lat, mapslocation.lng)
	};
	
	map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var mapStyles = [
	{
	    "featureType": "all",
	    "elementType": "labels.text.fill",
	    "stylers": [
	        {
	            "saturation": 36
	        },
	        {
	            "color": "#333333"
	        },
	        {
	            "lightness": 40
	        }
	    ]
	},
	{
	    "featureType": "all",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	        {
	            "visibility": "on"
	        },
	        {
	            "color": "#ffffff"
	        },
	        {
	            "lightness": 16
	        }
	    ]
	},
	{
	    "featureType": "all",
	    "elementType": "labels.icon",
	    "stylers": [
	        {
	            "visibility": "off"
	        }
	    ]
	},
	{
	    "featureType": "administrative",
	    "elementType": "geometry.fill",
	    "stylers": [
	        {
	            "color": "#fefefe"
	        },
	        {
	            "lightness": 20
	        }
	    ]
	},
	{
	    "featureType": "administrative",
	    "elementType": "geometry.stroke",
	    "stylers": [
	        {
	            "color": "#fefefe"
	        },
	        {
	            "lightness": 17
	        },
	        {
	            "weight": 1.2
	        }
	    ]
	},
	{
	    "featureType": "landscape",
	    "elementType": "geometry",
	    "stylers": [
	        {
	            "color": "#f5f5f5"
	        },
	        {
	            "lightness": 20
	        }
	    ]
	},
	{
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [
	        {
	            "color": "#f5f5f5"
	        },
	        {
	            "lightness": 21
	        }
	    ]
	},
	{
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	        {
	            "color": "#dedede"
	        },
	        {
	            "lightness": 21
	        }
	    ]
	},
	{
	    "featureType": "road.highway",
	    "elementType": "geometry.fill",
	    "stylers": [
	        {
	            "color": "#ffffff"
	        },
	        {
	            "lightness": 17
	        }
	    ]
	},
	{
	    "featureType": "road.highway",
	    "elementType": "geometry.stroke",
	    "stylers": [
	        {
	            "color": "#ffffff"
	        },
	        {
	            "lightness": 29
	        },
	        {
	            "weight": 0.2
	        }
	    ]
	},
	{
	    "featureType": "road.highway",
	    "elementType": "labels",
	    "stylers": [
	        {
	            "visibility": "simplified"
	        }
	    ]
	},
	{
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	        {
	            "color": "#ffffff"
	        },
	        {
	            "lightness": 18
	        }
	    ]
	},
	{
	    "featureType": "road.local",
	    "elementType": "geometry",
	    "stylers": [
	        {
	            "color": "#ffffff"
	        },
	        {
	            "lightness": 16
	        }
	    ]
	},
	{
	    "featureType": "transit",
	    "elementType": "geometry",
	    "stylers": [
	        {
	            "color": "#f2f2f2"
	        },
	        {
	            "lightness": 19
	        }
	    ]
	},
	{
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	        {
	            "color": "#e9e9e9"
	        },
	        {
	            "lightness": 17
	        }
	    ]
	}
	];
	
	map.setOptions({styles: mapStyles});
	
	var infoContent = '<div class="window-content">'+mapslocation.content+'</div>';
	
	var infowindow = new google.maps.InfoWindow({
		content: infoContent
	});
	
	
	
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(mapslocation.lat, mapslocation.lng),
		map: map,
		icon: mapspin,
		title: 'marker'
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
	// default open
	infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);

function checkResize(){

	var center = map.getCenter();
	google.maps.event.trigger(map, 'resize');
	map.setCenter(center);
}

window.onresize = checkResize;