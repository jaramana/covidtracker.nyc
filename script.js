 
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
return d > 796  ? '#b30000' :
	   d > 431  ? '#e34a33' :
	   d > 275  ? '#fc8d59' :
	   d > 36  ? '#fdcc8a' :
	   d > 0   ? '#fef0d9' :
				  '#ffffff';
}

var legend_positive = L.control({ position: "bottomright" });
legend_positive.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Positive cases</h6>'],
		grades = [999999, 796, 431, 275, 36, 0],
        labels = ["796 +", "431 - 795", "275 - 430", "36 - 274", "1 - 34", "No Positives/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_positive(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
			div.innerHTML = labels_title.join('<p>');
    }
    return div;
};






function getColor_positive_pc(d) {
return d > 14.7  ? '#b30000' :
	   d > 11.4  ? '#e34a33' :
	   d > 7.8  ? '#fc8d59' :
	   d > 4.7  ? '#fdcc8a' :
	   d > 0 ? '#fef0d9' :
				  '#ffffff';
}

var legend_positive_pc = L.control({ position: "bottomright" });
legend_positive_pc.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Positive cases<br>per one thousand</h6>'],
		grades = [999999, 14.7, 11.4, 7.8, 4.7, 0],
        labels = ["14.7 +", "11.4 - 14.6", "7.8 - 11.3", "4.7 - 7.7", "1 - 4.6", "No Positives/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_positive_pc(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
    }
    return div;
};






function getColor_total(d) {
return d > 1347  ? '#08519c' :
	   d > 807  ? '#3182bd' :
	   d > 514  ? '#6baed6' :
	   d > 101  ? '#bdd7e7' :
	   d > 0   ? '#eff3ff' :
				  '#ffffff';
}

var legend_total = L.control({ position: "bottomright" });
legend_total.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Total tests</h6>'],
		grades = [999999, 1347, 807, 514, 101, 0],
        labels = ["1347 +", "807 - 1346", "514 - 806", "101 - 513", "1 - 100", "No Tests/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_total(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
    }
    return div;
};






function getColor_total_pc(d) {
return d > 25.3  ? '#08519c' :
	   d > 19.3  ? '#3182bd' :
	   d > 15.3  ? '#6baed6' :
	   d > 11.5  ? '#bdd7e7' :
	   d > 0 ? '#eff3ff' :
				  '#ffffff';
}

var legend_total_pc = L.control({ position: "bottomright" });
legend_total_pc.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Total tests<br>per one thousand</h6>'],
		grades = [999999, 25.3, 19.3, 15.3, 11.5, 0],
        labels = ["25.3 +", "19.3 - 25.2", "15.3 - 19.2", "11.5 - 15.2", "1 - 11.4", "No Tests/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_total_pc(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
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
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Social Deprivation Index<br>Score</h6>'],
		grades = [999999, 96, 84, 70, 41, 6, 0],
        labels = ["96 +", "84 - 95.9", "70 - 83.9", "41 - 69.9", "6 - 40.9", "0 - 6", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_sdi(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
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
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Social Deprivation Index<br>Score</h6>'],
		grades = [999999, 96, 84, 70, 41, 6, 0],
        labels = ["96 +", "84 - 95.9", "70 - 83.9", "41 - 69.9", "6 - 40.9", "0 - 6", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_sdi(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
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
	  	//vzcta.bringToFront();		
		////healthcare.bringToFront();
		
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

    positive = L.geoJson(covid_nyc, {
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
	  	  //	vzcta.bringToFront();		
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

    positive_pc = L.geoJson(covid_nyc, {
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
	  	  //	vzcta.bringToFront();		
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
    total = L.geoJson(covid_nyc, {
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
	  	//  	vzcta.bringToFront();		
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
    total_pc = L.geoJson(covid_nyc, {
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







/*/



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

/*/



///////////////////////////////////////////////////////////////////////////////////

function getColor_SVI2018_overall(d) {
return d > 10  ? '#d7191c' :
	   d > 9.9  ? '#ea633e' :
	   d > 8.5  ? '#fdae61' :
	   d > 7.5  ? '#fed791' :
	   d > 6  ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}

var legend_SVI2018_overall = L.control({ position: "bottomright" });
legend_SVI2018_overall.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 10, 9.9, 8.5, 7.5, 6, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_overall(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
    }
    return div;
};







    function style_SVI2018_overall(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_overall(feature.properties.SPL_THEMES),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_overall(feature.properties.SPL_THEMES),
      };
    }
   
    function highlightFeature_SVI2018_overall(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  //	vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var SVI2018_overall;
    function resetHighlight_SVI2018_overall(e) {
      SVI2018_overall.resetStyle(e.target);
    }

    function onEachFeature_SVI2018_overall(feature, layer) {
      layer.on({
        mouseover: highlightFeature_SVI2018_overall,
        mouseout: resetHighlight_SVI2018_overall
      });
    }
    SVI2018_overall = L.geoJson(SVI2018_NEWYORK_tract_nyc_mod, {
      style: style_SVI2018_overall,
	  interactive: false
      //onEachFeature: onEachFeature_SVI2018_overall
    });
// Add popups to the layer
SVI2018_overall.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_SVI2018_overall, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////

function getColor_SVI2018_theme1(d) {
return d > 3.3  ? '#d7191c' :
	   d > 2.8  ? '#ea633e' :
	   d > 2.4  ? '#fdae61' :
	   d > 1.9  ? '#fed791' :
	   d > 1.3 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}

var legend_SVI2018_theme1 = L.control({ position: "bottomright" });
legend_SVI2018_theme1.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 3.3, 2.8, 2.4, 1.9, 1.3, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme1(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
    }
    return div;
};







    function style_SVI2018_theme1(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme1(feature.properties.SPL_THEME1),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme1(feature.properties.SPL_THEME1),
      };
    }
   
    function highlightFeature_SVI2018_theme1(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	//vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var SVI2018_theme1;
    function resetHighlight_SVI2018_theme1(e) {
      SVI2018_theme1.resetStyle(e.target);
    }

    function onEachFeature_SVI2018_theme1(feature, layer) {
      layer.on({
        mouseover: highlightFeature_SVI2018_theme1,
        mouseout: resetHighlight_SVI2018_theme1
      });
    }
    SVI2018_theme1 = L.geoJson(SVI2018_NEWYORK_tract_nyc_mod, {
      style: style_SVI2018_theme1,
      onEachFeature: onEachFeature_SVI2018_theme1
    });
// Add popups to the layer
SVI2018_theme1.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_SVI2018_theme1, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////








///////////////////////////////////////////////////////////////////////////////////

function getColor_SVI2018_theme2(d) {
return d > 2.5  ? '#d7191c' :
	   d > 2.1 ? '#ea633e' :
	   d > 1.9  ? '#fdae61' :
	   d > 1.6  ? '#fed791' :
	   d > 1.2 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}

var legend_SVI2018_theme2 = L.control({ position: "bottomright" });
legend_SVI2018_theme2.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 2.5, 2.1, 1.9, 1.6, 1.2, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme2(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
    }
    return div;
};







    function style_SVI2018_theme2(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme2(feature.properties.SPL_THEME2),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme2(feature.properties.SPL_THEME2),
      };
    }
   
    function highlightFeature_SVI2018_theme2(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	//vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var SVI2018_theme2;
    function resetHighlight_SVI2018_theme2(e) {
      SVI2018_theme2.resetStyle(e.target);
    }

    function onEachFeature_SVI2018_theme2(feature, layer) {
      layer.on({
        mouseover: highlightFeature_SVI2018_theme2,
        mouseout: resetHighlight_SVI2018_theme2
      });
    }
    SVI2018_theme2 = L.geoJson(SVI2018_NEWYORK_tract_nyc_mod, {
      style: style_SVI2018_theme2,
      onEachFeature: onEachFeature_SVI2018_theme2
    });
// Add popups to the layer
SVI2018_theme2.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_SVI2018_theme2, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////












///////////////////////////////////////////////////////////////////////////////////

function getColor_SVI2018_theme3(d) {
return d > 1.7  ? '#d7191c' :
	   d > 1.6 ? '#ea633e' :
	   d > 1.5  ? '#fdae61' :
	   d > 1.3  ? '#fed791' :
	   d > 1 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}

var legend_SVI2018_theme3 = L.control({ position: "bottomright" });
legend_SVI2018_theme3.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 1.7, 1.6, 1.5, 1.3, 1, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme3(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
    }
    return div;
};







    function style_SVI2018_theme3(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme3(feature.properties.SPL_THEME3),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme3(feature.properties.SPL_THEME3),
      };
    }
   
    function highlightFeature_SVI2018_theme3(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	//vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var SVI2018_theme3;
    function resetHighlight_SVI2018_theme3(e) {
      SVI2018_theme3.resetStyle(e.target);
    }

    function onEachFeature_SVI2018_theme3(feature, layer) {
      layer.on({
        mouseover: highlightFeature_SVI2018_theme3,
        mouseout: resetHighlight_SVI2018_theme3
      });
    }
    SVI2018_theme3 = L.geoJson(SVI2018_NEWYORK_tract_nyc_mod, {
      style: style_SVI2018_theme3,
      onEachFeature: onEachFeature_SVI2018_theme3
    });
// Add popups to the layer
SVI2018_theme3.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_SVI2018_theme3, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////








///////////////////////////////////////////////////////////////////////////////////

function getColor_SVI2018_theme4(d) {
return d > 3.2  ? '#d7191c' :
	   d > 2.8 ? '#ea633e' :
	   d > 2.6  ? '#fdae61' :
	   d > 2.3  ? '#fed791' :
	   d > 1.8 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}

var legend_SVI2018_theme4 = L.control({ position: "bottomright" });
legend_SVI2018_theme4.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 3.2, 2.8, 2.6, 2.3, 1.8, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme4(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p>' : '+'));
        div.innerHTML = labels_title.join('<p>');
    }
    return div;
};







    function style_SVI2018_theme4(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme4(feature.properties.SPL_THEME4),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme4(feature.properties.SPL_THEME4),
      };
    }
   
    function highlightFeature_SVI2018_theme4(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1
      });
	  	  	//vzcta.bringToFront();		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var SVI2018_theme4;
    function resetHighlight_SVI2018_theme4(e) {
      SVI2018_theme4.resetStyle(e.target);
    }

    function onEachFeature_SVI2018_theme4(feature, layer) {
      layer.on({
        mouseover: highlightFeature_SVI2018_theme4,
        mouseout: resetHighlight_SVI2018_theme4
      });
    }
    SVI2018_theme4 = L.geoJson(SVI2018_NEWYORK_tract_nyc_mod, {
      style: style_SVI2018_theme4,
      onEachFeature: onEachFeature_SVI2018_theme4
    });
// Add popups to the layer
SVI2018_theme4.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_SVI2018_theme4, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////




/*/
 // get color depending on population density value
function getColor5(d) {
        return d === 'Health Care'  ? "#ff7f00" :
                               d === 'Human Services'  ? '#0000ff' :
                            "#de2d26";
    }
    function style5(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: getColor5(feature.properties.Facilities_facgroup),
        fillOpacity: 0.2,
                       fillColor: getColor5(feature.properties.Facilities_facgroup),
      };
    }
    healthcare = L.geoJson(Facilities_Accessible, {
      style: style5,
    });


// Add popups to the layer
healthcare.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);
// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_nycha_geo, layer.feature.properties);
});        


var legend5 = L.control({position: 'bottomright'});
    legend5.onAdd = function (map) {
    var div5 = L.DomUtil.create('div', 'info legend');
    labels5 = ['<strong>Facilities</strong>'],
    categories5 = ['Health Care','Human Services','Other'];
 
    for (var i = 0; i < categories5.length; i++) {
            div5.innerHTML +=
            labels5.push(
                '<i class="circle" style="background:' + getColor5(categories5[i]) + '"></i> ' +
                (categories5[i] ? categories5[i] : '+'));
        }
        div5.innerHTML = labels5.join('<br>');
    return div5;
};

/*/
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});

var basemap = L.layerGroup([positron, positronLabels]);




var mapOptions = {
	zoomControl: false, 
	attributionControl: false, 
	center: [40.715, -74.1],
	zoom: 11,
	minZoom: 10,
	maxZoom: 19,
};


var map = L.map('map', mapOptions);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';



positive.addTo(map);


basemap.addTo(map);








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
		////healthcare.bringToFront();		
		//vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Positive cases per one thousand') {
        map.removeControl(currentLegend );
        currentLegend = legend_positive_pc;
        legend_positive_pc.addTo(map);
		////healthcare.bringToFront();		
		//vzcta.bringToFront();

    }
    else if  (eventLayer.name === 'Total tests') {
       map.removeControl(currentLegend );
        currentLegend = legend_total;
        legend_total.addTo(map);
		////healthcare.bringToFront();	
		//vzcta.bringToFront();		
    }
    else if  (eventLayer.name === 'Total tests per one thousand') {
       map.removeControl(currentLegend );
        currentLegend = legend_total_pc;
        legend_total_pc.addTo(map);
		////healthcare.bringToFront();		
		//vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Overall Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_overall;
        legend_SVI2018_overall.addTo(map);
		////healthcare.bringToFront();		
		//vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Socioeconomic Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme1;
        legend_SVI2018_theme1.addTo(map);
		////healthcare.bringToFront();		
		//vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Household Composition & Disability Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme2;
        legend_SVI2018_theme2.addTo(map);
		////healthcare.bringToFront();		
		//vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Minority Status & Language Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme3;
        legend_SVI2018_theme3.addTo(map);
		////healthcare.bringToFront();		
		//vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Housing Type & Transportation Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme4;
        legend_SVI2018_theme4.addTo(map);
		////healthcare.bringToFront();
		//vzcta.bringToFront();
    }
	/*/
    else if  (eventLayer.name === "Social Deprivation Index (<a href='https://www.graham-center.org/rgc/maps-data-tools/sdi/social-deprivation-index.html' target=_blank>?</a>)") {
       map.removeControl(currentLegend );
        currentLegend = legend_sdi;
        legend_sdi.addTo(map);
		vzcta.bringToFront();
    }
	/*/
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



var underlays = {
	"Positive cases": positive,
	"Positive cases per one thousand": positive_pc,
	"Total tests": total,
	"Total tests per one thousand<br><br><b>CDC Social Vulnerability Index (<a href='https://svi.cdc.gov/index.html' target=_blank>?</a>)</b>": total_pc,
//	"Social Deprivation Index (<a href='https://www.graham-center.org/rgc/maps-data-tools/sdi/social-deprivation-index.html' target=_blank>?</a>)": sdi,
	"Overall Vulnerability": SVI2018_overall,
	"Socioeconomic Vulnerability": SVI2018_theme1,
	"Household Composition & Disability Vulnerability": SVI2018_theme2,
	"Minority Status & Language Vulnerability": SVI2018_theme3,
	"Housing Type & Transportation Vulnerability": SVI2018_theme4,
};

var overlays = {
//	"Healthcare Facilities": healthcare,
	"Basemap": basemap,
//	"Vulnerable Zip Codes": vzcta,
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
//$(".leaflet-control-layers-list").prepend("<b>COVID Cases</b>");
  });



var popupTemplate_positive = document.querySelector('.popupTemplate_positive').innerHTML;
//var popupTemplate_sdi = document.querySelector('.popupTemplate_sdi').innerHTML;
var popupTemplate_SVI2018_theme1 = document.querySelector('.popupTemplate_SVI2018_theme1').innerHTML;
var popupTemplate_SVI2018_theme2 = document.querySelector('.popupTemplate_SVI2018_theme2').innerHTML;
var popupTemplate_SVI2018_theme3 = document.querySelector('.popupTemplate_SVI2018_theme3').innerHTML;
var popupTemplate_SVI2018_theme4 = document.querySelector('.popupTemplate_SVI2018_theme4').innerHTML;



