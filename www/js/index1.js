var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(-23.5212800,-46.4709700),
		L.latLng(-23.5232711,-46.4749949)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true,
	reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	}
	
	
})).addTo(map);

var earthquakeMarker = L.marker([-23.54500,-46.682570], 
      {title: ''});
      earthquakeMarker.bindPopup("Estúdio: Space Blues - (11) 3801-2383 | Av. Dr. Arnaldo, 2333 - Sumaré, São Paulo, 01255-000");
      earthquakeMarker.addTo(map);


  var earthquakeMarker = L.marker([-23.5095400,-46.6968200], 
      {title: ''});
      earthquakeMarker.bindPopup("Estúdio: Mosh Studios Ltda - (11) 3611-8855 | Rua Antônio Nagib Ibrahim, 314 - Bl B - Água Branca");
      earthquakeMarker.addTo(map);
	  
	  var earthquakeMarker = L.marker([-23.5561100,-46.6752600], 
      {title: ''});
      earthquakeMarker.bindPopup("Estúdio: Espaço Som - (11) 2364-8533 | Rua Teodoro Sampaio, 462 - Pinheiros, São Paulo, 05405-050");
      earthquakeMarker.addTo(map);
	  
	  var earthquakeMarker = L.marker([-23.5364600,-46.5706300],
      	  
      {title: ''});
      earthquakeMarker.bindPopup("Estúdio: Armazém - (11) 96839-4527 | Rua Henrique Lindenberg, 224 - Tatuapé, São Paulo, 03067-030");
      earthquakeMarker.addTo(map);
	  
	
	  

    map.on('click', function(e){
    var  marker = new L.marker(e.latlng).addTo(map);
});

    function newMarker(e){
    var marker = new L.marker(e.latlng).addTo(map);
	
}


L.Routing.errorControl(control).addTo(map);