function myMap() {
			var myCenter = new google.maps.LatLng(45.504587, 8.655171);
			var mapCanvas = document.getElementById("map");
			var mapOptions = {center: myCenter, zoom: 12};
			var map = new google.maps.Map(mapCanvas, mapOptions);
			var marker = new google.maps.Marker({position:myCenter});
			marker.setMap(map);

			var infowindow = new google.maps.InfoWindow({
				content: "GymGym"
			});
			infowindow.open(map,marker);
		}