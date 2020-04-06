
// Fetch lanes data from our Glitch project
var vzv_tcst = fetch('https://data.cityofnewyork.us/resource/hiik-hmf3.geojson')
  .then(function (response) {
    // Read data as JSON
    return response.json();
  });


// Once both have loaded, do some work with them
Promise.all([vzv_tcst])
  .then(function (fetchedData) {
    console.log('Both datasets have loaded');
    // Unpack the data from the Promise
	var vzv_tcst = fetchedData[1];

  





// get color depending on population density value
function getColor_vzcta(d) {
return d > 96  ? '#ffcc00' :
				  '#ffffff00';
}






// get color depending on population density value
function getColor_positive(d) {
return d >= 469  ? '#b30000' :
	   d >= 278  ? '#e34a33' :
	   d >= 177  ? '#fc8d59' :
	   d >= 29  ? '#fdcc8a' :
	   d > 0   ? '#fef0d9' :
				  '#ffffff';
}

var legend_positive = L.control({ position: "bottomright" });
legend_positive.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Positive cases</h6>'],
		grades = [999999, 469, 278, 177, 29, 0],
        labels = ["469 +", "278 - 468.9", "177 - 277.9", "29 - 176.9", "1 - 28.9", "No Positives/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_positive(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};






function getColor_positive_pc(d) {
return d >= 8  ? '#b30000' :
	   d >= 7  ? '#e34a33' :
	   d >= 5  ? '#fc8d59' :
	   d >= 4  ? '#fdcc8a' :
	   d >= 0 ? '#fef0d9' :
				  '#ffffff';
}

var legend_positive_pc = L.control({ position: "bottomright" });
legend_positive_pc.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Positive cases<br>per one thousand</h6>'],
		grades = [999999, 8, 7, 5, 4, 0],
        labels = ["8 +", "7 - 7.9", "5 - 6.9", "4 - 4.9", "1 - 3.9", "No Positives/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_positive_pc(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};






function getColor_total(d) {
return d >= 874  ? '#08519c' :
	   d >= 539  ? '#3182bd' :
	   d >= 351  ? '#6baed6' :
	   d >= 77  ? '#bdd7e7' :
	   d > 0   ? '#eff3ff' :
				  '#ffffff';
}

var legend_total = L.control({ position: "bottomright" });
legend_total.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Total tests</h6>'],
		grades = [999999, 874, 539, 351, 77, 0],
        labels = ["874 +", "539 - 873", "351 - 538", "77 - 350", "1 - 76", "No Positives/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_total(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};






function getColor_total_pc(d) {
return d >= 16  ? '#08519c' :
	   d >= 13  ? '#3182bd' :
	   d >= 11  ? '#6baed6' :
	   d >= 8  ? '#bdd7e7' :
	   d > 0 ? '#eff3ff' :
				  '#ffffff';
}

var legend_total_pc = L.control({ position: "bottomright" });
legend_total_pc.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Total tests<br>per one thousand</h6>'],
		grades = [999999, 16, 13, 11, 8, 0],
        labels = ["16 +", "13 - 15.9", "11 - 12.9", "8 - 10.9", "1 - 7.9", "No Positives/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_total_pc(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};






function getColor_sdi(d) {
return d > 96  ? '#d73027' :
	   d > 84  ? '#fc8d59' :
	   d > 70  ? '#fee08b' :
	   d > 41  ? '#d9ef8b' :
	   d > 6  ? '#91cf60' :
	   d > 0 ? '#1a9850' :
				  '#ffffff';
}

var legend_sdi = L.control({ position: "bottomright" });
legend_sdi.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Social Deprivation Index <br>Score</h6>'],
		grades = [999999, 96, 84, 70, 41, 6, 0],
        labels = ["96 +", "84 - 95.9", "70 - 83.9", "41 - 69.9", "6 - 40.9", "0 - 6", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_sdi(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};






///////////////////////////////////////////////////////////////////////////////////
    function style_positive(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_positive(feature.properties.Positive),
        fillOpacity: .7,
 		fillColor: getColor_positive(feature.properties.Positive),
      };
    }
    function highlightFeature_positive(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1,
      });
	  	vzcta.bringToFront();		

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var positive;
    function resetHighlight_positive(e) {
      positive.resetStyle(e.target);
    }

    function onEachFeature_positive(feature, layer) {
      layer.on({
        mouseover: highlightFeature_positive,
        mouseout: resetHighlight_positive
      });
    }

    positive = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_positive,
      onEachFeature: onEachFeature_positive

    });
// Add popups to the layer
positive.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_positive, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////////////////////
    function style_positive_pc(feature) {
      return {
        weight: 1,
        opacity: .5,
        color: getColor_positive_pc(feature.properties.positiveperthou),
        fillOpacity: .7,
 		fillColor: getColor_positive_pc(feature.properties.positiveperthou),
      };
    }
   
    function highlightFeature_positive_pc(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var positive_pc;
    function resetHighlight_positive_pc(e) {
      positive_pc.resetStyle(e.target);
    }

    function onEachFeature_positive_pc(feature, layer) {
      layer.on({
        mouseover: highlightFeature_positive_pc,
        mouseout: resetHighlight_positive_pc
      });
    }

    positive_pc = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_positive_pc,
      onEachFeature: onEachFeature_positive_pc

    });
// Add popups to the layer
positive_pc.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_positive, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////

    function style_total(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_total(feature.properties.Total),
        fillOpacity: .7,
 		fillColor: getColor_total(feature.properties.Total),
      };
    }
   
    function highlightFeature_total(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var total;
    function resetHighlight_total(e) {
      total.resetStyle(e.target);
    }

    function onEachFeature_total(feature, layer) {
      layer.on({
        mouseover: highlightFeature_total,
        mouseout: resetHighlight_total
      });
    }
    total = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_total,
      onEachFeature: onEachFeature_total
    });
// Add popups to the layer
total.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_positive, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////

    function style_total_pc(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_total_pc(feature.properties.totalperthou),
        fillOpacity: .7,
 		fillColor: getColor_total_pc(feature.properties.totalperthou),
      };
    }
   
    function highlightFeature_total_pc(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var total_pc;
    function resetHighlight_total_pc(e) {
      total_pc.resetStyle(e.target);
    }

    function onEachFeature_total_pc(feature, layer) {
      layer.on({
        mouseover: highlightFeature_total_pc,
        mouseout: resetHighlight_total_pc
      });
    }
    total_pc = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_total_pc,
      onEachFeature: onEachFeature_total_pc
    });
// Add popups to the layer
total_pc.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_positive, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////











///////////////////////////////////////////////////////////////////////////////////

    function style_sdi(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_sdi(feature.properties.sdi_score),
        fillOpacity: .7,
 		fillColor: getColor_sdi(feature.properties.sdi_score),
      };
    }
   
    function highlightFeature_sdi(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var sdi;
    function resetHighlight_sdi(e) {
      sdi.resetStyle(e.target);
    }

    function onEachFeature_sdi(feature, layer) {
      layer.on({
        mouseover: highlightFeature_sdi,
        mouseout: resetHighlight_sdi
      });
    }
    sdi = L.geoJson(ACS2015_zctaallvars, {
      style: style_sdi,
      onEachFeature: onEachFeature_sdi
    });
// Add popups to the layer
sdi.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_sdi, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////


  
///////////////////////////////////////////////////////////////////////////////////

    function style_vzcta(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: getColor_vzcta(feature.properties.sdi_score),
        fillOpacity: 0,
      };
    }

    vzcta = L.geoJson(ACS2015_zctaallvars, {
      style: style_vzcta,
	  interactive: false,
    });
// Add popups to the layer
vzcta.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_positive, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////







///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


var mapOptions = {
	zoomControl: false, 
	attributionControl: false, 
	center: [40.715, -74.1],
	zoom: 11,
	minZoom: 9,
	maxZoom: 19,
};


var map = L.map('map', mapOptions);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';


var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);


positive.addTo(map);










L.control.zoom({
     position:'topright'
}).addTo(map);



legend_positive.addTo(map);
currentLegend = legend_positive;

map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === 'Positive cases') {
        map.removeControl(currentLegend );
        currentLegend = legend_positive;
        legend_positive.addTo(map);
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Positive cases per one thousand') {
        map.removeControl(currentLegend );
        currentLegend = legend_positive_pc;
        legend_positive_pc.addTo(map);	
		vzcta.bringToFront();

    }
    else if  (eventLayer.name === 'Total tests') {
       map.removeControl(currentLegend );
        currentLegend = legend_total;
        legend_total.addTo(map);
		vzcta.bringToFront();		
    }
    else if  (eventLayer.name === 'Total tests per one thousand') {
       map.removeControl(currentLegend );
        currentLegend = legend_total_pc;
        legend_total_pc.addTo(map);
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === "Social Deprivation Index (<a href='https://www.graham-center.org/rgc/maps-data-tools/sdi/social-deprivation-index.html' target=_blank>?</a>)") {
       map.removeControl(currentLegend );
        currentLegend = legend_sdi;
        legend_sdi.addTo(map);
		vzcta.bringToFront();
    }
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



var underlays = {
	"Positive cases": positive,
	"Positive cases per one thousand": positive_pc,
	"Total tests": total,
	"Total tests per one thousand": total_pc,
	"Social Deprivation Index (<a href='https://www.graham-center.org/rgc/maps-data-tools/sdi/social-deprivation-index.html' target=_blank>?</a>)": sdi,
};

var overlays = {
	"Vulnerable Zip Codes": vzcta,
};


 var sidebar = L.control.sidebar({
    autopan: false,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map).open('home');

  

  
  
//Render Layer Control & Move to Sidebar
var layerControl = L.control.layers(underlays, overlays, {position: "topright",collapsed: false}).addTo(map);
var oldLayerControl = layerControl.getContainer();
var newLayerControl = $("#layercontrol");
newLayerControl.append(oldLayerControl);
$(".leaflet-control-layers-list").after("<p>Last Updated April 6, 2020 at 7:30pm.</p>");
  });



var popupTemplate_positive = document.querySelector('.popupTemplate_positive').innerHTML;
var popupTemplate_sdi = document.querySelector('.popupTemplate_sdi').innerHTML;