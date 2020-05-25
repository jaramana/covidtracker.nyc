var map = L.map('map').setView([40.730610, -73.935242], 11)

map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.dragging.disable();


// Add basemap
L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)



// Add GeoJSON
$.getJSON('https://raw.githubusercontent.com/jaramana/covid-tracker-nyc/master/data/SVI2018_NEWYORK_ZCTA_CW.geojson', function (geojson) {
  L.choropleth(geojson, {
    valueProperty: 'zcta',
    scale: ['white', 'red'],
    steps: 5,
    mode: 'q',
    style: {
      color: '#fff',
      weight: 2,
      fillOpacity: 0.8
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('District ' + feature.properties.dist_num + '<br>' +
          feature.properties.incidents.toLocaleString() + ' incidents')
    }
  }).addTo(map)
})

