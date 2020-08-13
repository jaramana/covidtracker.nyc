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



///////////////////////////////////////////////////////////////////////////////////
/*/ Vulnerable Zip Codes - Color/Breaks
function getColor_vzcta(d) {
return d > 96  ? '#ffcc00' :
				  '#ffffff00';
}
/*/
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Positive Tests
// Positive Tests - Color/Breaks
function getColor_positive(d) {
    return d > 1847 ? '#7a0177' :
        d > 1132 ? '#c51b8a' :
        d > 644 ? '#f768a1' :
        d > 173 ? '#fbb4b9' :
        d > 0 ? '#feebe2' :
        '#ffffff00';
}

// Positive Tests - Legend
var legend_positive = L.control({
    position: "bottomright"
});
legend_positive.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Cases</h6>'],
        grades = [999999, 1847, 1132, 644, 173, 0],
        labels = ["1847 +", "1132 - 1847", "644 - 1132", "173 - 644", "1 - 173", "No Positives/Data"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
                '<i style="background:' + getColor_positive(grades[i]) + '"></i>' +
                (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Positive Tests per thousand
// Positive Tests per thousand - Color/Breaks
function getColor_positive_pc(d) {
    return d > 3211 ? '#7a0177' :
        d > 2745 ? '#c51b8a' :
        d > 1926 ? '#f768a1' :
        d > 1080 ? '#fbb4b9' :
        d > 0 ? '#feebe2' :
        '#ffffff00';
}

// Positive Tests per thousand - Legend
var legend_positive_pc = L.control({
    position: "bottomright"
});
legend_positive_pc.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Case Rate</h6>'],
        grades = [999999, 3211, 2745, 1926, 1080, 0],
        labels = ["3211 +", "2745 - 3211", "1926 - 2745", "1080 - 1926", "1 - 1080", "No Positives/Data"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
                '<i style="background:' + getColor_positive_pc(grades[i]) + '"></i>' +
                (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// death Tests
// death Tests - Color/Breaks
function getColor_death(d) {
    return d > 164 ? '#7a0177' :
        d > 97 ? '#c51b8a' :
        d > 47 ? '#f768a1' :
        d > 9 ? '#fbb4b9' :
        d > 0 ? '#feebe2' :
        '#ffffff00';
}

// death Tests - Legend
var legend_death = L.control({
    position: "bottomright"
});
legend_death.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Deaths</h6>'],
        grades = [999999, 164, 97, 47, 9, 0],
        labels = ["164 +", "97 - 164", "47 - 97", "9 - 47", "1 - 9", "No deaths/Data"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
                '<i style="background:' + getColor_death(grades[i]) + '"></i>' +
                (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// death Tests per thousand
// death Tests per thousand - Color/Breaks
function getColor_death_pc(d) {
    return d > 269 ? '#7a0177' :
        d > 207 ? '#c51b8a' :
        d > 151 ? '#f768a1' :
        d > 64 ? '#fbb4b9' :
        d > 0 ? '#feebe2' :
        '#ffffff00';
}

// death Tests per thousand - Legend
var legend_death_pc = L.control({
    position: "bottomright"
});
legend_death_pc.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Death Rate</h6>'],
        grades = [999999, 269, 207, 151, 64, 0],
        labels = ["269 +", "207 - 269", "151 - 207", "64 - 151", "1 - 64", "No deaths/Data"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
                '<i style="background:' + getColor_death_pc(grades[i]) + '"></i>' +
                (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// percent tests
// percent tests - Color/Breaks
function getColor_percent(d) {
return d > 16  ? '#045a8d' :
	   d > 14  ? '#2b8cbe' :
	   d > 10  ? '#74a9cf' :
	   d > 5  ? '#bdc9e1' :
	   d > 0   ? '#f1eef6' :
				  '#ffffff00';
}

// percent tests - Legend
var legend_percent = L.control({ position: "bottomright" });
legend_percent.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Percent Positive</h6>'],
		grades = [999999, 16, 14, 10, 5, 0],
        labels = ["16 +", "14 - 16", "10 - 14", "5 - 10", "1 - 5", "No Tests/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_percent(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////
// Total tests
// Total tests - Color/Breaks
function getColor_total(d) {
return d > 13915  ? '#045a8d' :
	   d > 9751  ? '#2b8cbe' :
	   d > 6350  ? '#74a9cf' :
	   d > 2287  ? '#bdc9e1' :
	   d > 0   ? '#f1eef6' :
				  '#ffffff00';
}

// Total tests - Legend
var legend_total = L.control({ position: "bottomright" });
legend_total.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Total Tests</h6>'],
		grades = [999999, 13915, 9751, 6350, 2287, 0],
        labels = ["13915 +", "9751 - 13915", "6350 - 9751", "2287 - 6350", "1 - 2287", "No Tests/Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_total(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////
// Vulnerable Zip Codes - Color/Breaks
function getColor_vzcta(d) {
return d > 10.48  ? '#ffcc00' :
				  '#ffffff00';
}
//
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
//Social Vulnerability Index - Overall
//Social Vulnerability Index - Overall - Color/Breaks
function getColor_SVI2018_overall(d) {
return d > 10.48  ? '#d7191c' :
	   d > 9.67  ? '#ea633e' :
	   d > 8.87  ? '#fdae61' :
	   d > 8.04  ? '#fed791' :
	   d > 5.74  ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}
//Social Vulnerability Index - Overall - Legend
var legend_SVI2018_overall = L.control({ position: "bottomright" });
legend_SVI2018_overall.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 10.48, 9.67, 8.87, 8.04, 5.74, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_overall(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
//Social Vulnerability Index - Theme 1
//Social Vulnerability Index - Theme 1 - Color/Breaks
function getColor_SVI2018_theme1(d) {
return d > 2.95  ? '#d7191c' :
	   d > 2.74  ? '#ea633e' :
	   d > 2.41  ? '#fdae61' :
	   d > 2.09  ? '#fed791' :
	   d > 0.7042 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}
//Social Vulnerability Index - Theme 1 - Legend
var legend_SVI2018_theme1 = L.control({ position: "bottomright" });
legend_SVI2018_theme1.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 2.95, 2.74, 2.41, 2.09, 0.7042, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme1(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Social Vulnerability Index - Theme 2
// Social Vulnerability Index - Theme 2 - Color/Breaks
function getColor_SVI2018_theme2(d) {
return d > 2.25  ? '#d7191c' :
	   d > 1.79 ? '#ea633e' :
	   d > 1.49  ? '#fdae61' :
	   d > 1.09  ? '#fed791' :
	   d > 0.27 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}
// Social Vulnerability Index - Theme 2 - Legend
var legend_SVI2018_theme2 = L.control({ position: "bottomright" });
legend_SVI2018_theme2.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 2.25, 1.79, 1.49, 1.09, 0.27, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme2(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Social Vulnerability Index - Theme 3
// Social Vulnerability Index - Theme 3 - Color/Breaks
function getColor_SVI2018_theme3(d) {
return d > 1.93  ? '#d7191c' :
	   d > 1.86 ? '#ea633e' :
	   d > 1.80  ? '#fdae61' :
	   d > 1.68  ? '#fed791' :
	   d > 0.4979 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}
// Social Vulnerability Index - Theme 2 - Legend
var legend_SVI2018_theme3 = L.control({ position: "bottomright" });
legend_SVI2018_theme3.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 1.93, 1.86, 1.80, 1.68, 0.4979, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme3(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Social Vulnerability Index - Theme 4
// Social Vulnerability Index - Theme 4 - Color/Breaks
function getColor_SVI2018_theme4(d) {
return d > 3.69  ? '#d7191c' :
	   d > 3.51 ? '#ea633e' :
	   d > 3.32  ? '#fdae61' :
	   d > 2.93  ? '#fed791' :
	   d > 1.6463 ? '#ffffc0' :
	   d > 0 ? '#d3ec95' :
				  '#ffffff00';
}
// Social Vulnerability Index - Theme 4 - Legend
var legend_SVI2018_theme4 = L.control({ position: "bottomright" });
legend_SVI2018_theme4.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:12px;font-weight: bold;">Vulnerability</h6>'],
		grades = [999999, 3.69, 3.51, 3.32, 2.93, 1.6463, 0],
        labels = ["Most", "Very High", "Moderate", "Low", "Very Low", "Least", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_SVI2018_theme4(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">' : '+'));
        div.innerHTML = labels_title.join('<p style="text-align:left;font-size:12px;margin-top:5px;margin-bottom:5px">');
    }
    return div;
};
///////////////////////////////////////////////////////////////////////////////////



/*//////////////////////////////////////////////////////////////////////////////////
// Social Deprivation Index
// Social Deprivation Index - Color/Breaks
function getColor_sdi(d) {
return d > 96  ? '#d73027' :
	   d > 84  ? '#fc8d59' :
	   d > 70  ? '#fee08b' :
	   d > 41  ? '#d9ef8b' :
	   d > 6  ? '#91cf60' :
	   d > 0 ? '#1a9850' :
				  '#ffffff';
}
// Social Deprivation Index - Legend
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
/*//////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Positive Tests
    function style_positive(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_positive(feature.properties.COVID_CASE_COUNT),
        fillOpacity: .7,
 		fillColor: getColor_positive(feature.properties.COVID_CASE_COUNT),
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
// Positive Tests per thousand
    function style_positive_pc(feature) {
      return {
        weight: 1,
        opacity: .5,
        color: getColor_positive_pc(feature.properties.COVID_CASE_RATE),
        fillOpacity: .7,
 		fillColor: getColor_positive_pc(feature.properties.COVID_CASE_RATE),
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
// death Tests
    function style_death(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_death(feature.properties.COVID_DEATH_COUNT),
        fillOpacity: .7,
 		fillColor: getColor_death(feature.properties.COVID_DEATH_COUNT),
      };
    }
    function highlightFeature_death(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: "#777",
        dashArray: "",
        fillOpacity: 1,
      });
	  	vzcta.bringToFront();		
		////healthcare.bringToFront();
		
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
var death;
    function resetHighlight_death(e) {
      death.resetStyle(e.target);
	  
	  
    }

    function onEachFeature_death(feature, layer) {
      layer.on({
        mouseover: highlightFeature_death,
        mouseout: resetHighlight_death
      });
    }

    death = L.geoJson(covid_nyc, {
      style: style_death,
      onEachFeature: onEachFeature_death

    });
// Add popups to the layer
death.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_death, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Positive Tests per thousand
    function style_death_pc(feature) {
      return {
        weight: 1,
        opacity: .5,
        color: getColor_death_pc(feature.properties.COVID_DEATH_RATE),
        fillOpacity: .7,
 		fillColor: getColor_death_pc(feature.properties.COVID_DEATH_RATE),
      };
    }
   
    function highlightFeature_death_pc(e) {
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
var death_pc;
    function resetHighlight_death_pc(e) {
      death_pc.resetStyle(e.target);
    }

    function onEachFeature_death_pc(feature, layer) {
      layer.on({
        mouseover: highlightFeature_death_pc,
        mouseout: resetHighlight_death_pc
      });
    }

    death_pc = L.geoJson(covid_nyc, {
      style: style_death_pc,
      onEachFeature: onEachFeature_death_pc

    });
// Add popups to the layer
death_pc.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_positive, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Percent
    function style_percent(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_percent(feature.properties.PERCENT_POSITIVE),
        fillOpacity: .7,
 		fillColor: getColor_percent(feature.properties.PERCENT_POSITIVE),
      };
    }
   
    function highlightFeature_percent(e) {
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
var percent_pc;
    function resetHighlight_percent(e) {
      percent_pc.resetStyle(e.target);
    }

    function onEachFeature_percent(feature, layer) {
      layer.on({
        mouseover: highlightFeature_percent,
        mouseout: resetHighlight_percent
      });
    }
    percent_pc = L.geoJson(covid_nyc, {
      style: style_percent,
      onEachFeature: onEachFeature_percent
    });
// Add popups to the layer
percent_pc.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_positive, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// Total
    function style_total(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_total(feature.properties.TOTAL_COVID_TESTS),
        fillOpacity: .7,
 		fillColor: getColor_total(feature.properties.TOTAL_COVID_TESTS),
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




/*//////////////////////////////////////////////////////////////////////////////////
// Social Deprivation Index
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
/*//////////////////////////////////////////////////////////////////////////////////


  
/*//////////////////////////////////////////////////////////////////////////////////
// Vulnerable Zip Codes
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
/*//////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// SVI - Vulnerable Zip Codes
    function style_vzcta(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: getColor_vzcta(feature.properties.SPL_THEMES_ADD),
        fillOpacity: 0,
      };
    }

    vzcta = L.geoJson(SVI2018_NEWYORK_ZCTA_CW, {
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
//Social Vulnerability Index - Overall
    function style_SVI2018_overall(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_overall(feature.properties.SPL_THEMES_ADD),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_overall(feature.properties.SPL_THEMES_ADD),
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
	  	  	vzcta.bringToFront();		
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
    SVI2018_overall = L.geoJson(SVI2018_NEWYORK_ZCTA_CW, {
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
//Social Vulnerability Index - Theme 1
    function style_SVI2018_theme1(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme1(feature.properties.SPL_THEME1_ADD),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme1(feature.properties.SPL_THEME1_ADD),
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
	  	  	vzcta.bringToFront();		
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
    SVI2018_theme1 = L.geoJson(SVI2018_NEWYORK_ZCTA_CW, {
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
//Social Vulnerability Index - Theme 2
    function style_SVI2018_theme2(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme2(feature.properties.SPL_THEME2_ADD),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme2(feature.properties.SPL_THEME2_ADD),
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
	  	  	vzcta.bringToFront();		
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
    SVI2018_theme2 = L.geoJson(SVI2018_NEWYORK_ZCTA_CW, {
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
//Social Vulnerability Index - Theme 3
    function style_SVI2018_theme3(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme3(feature.properties.SPL_THEME3_ADD),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme3(feature.properties.SPL_THEME3_ADD),
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
	  	  	vzcta.bringToFront();		
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
    SVI2018_theme3 = L.geoJson(SVI2018_NEWYORK_ZCTA_CW, {
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
//Social Vulnerability Index - Theme 4
    function style_SVI2018_theme4(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_SVI2018_theme4(feature.properties.SPL_THEME4_ADD),
        fillOpacity: .7,
 		fillColor: getColor_SVI2018_theme4(feature.properties.SPL_THEME4_ADD),
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
	  	  	vzcta.bringToFront();		
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
    SVI2018_theme4 = L.geoJson(SVI2018_NEWYORK_ZCTA_CW, {
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



// Basemap
var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: 'NYC COVID Tracker'
});
var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    pane: 'labels'
});
var basemap = L.layerGroup([positron, positronLabels]);



// Map options
var mapOptions = {
	zoomControl: false, 
	attributionControl: false, 
	center: [40.715, -74.1],
	zoom: 11,
	minZoom: 10,
	maxZoom: 19,
};



// Load map
var map = L.map('map', mapOptions);


// Load zoom button
L.control.zoom({
     position:'topright'
}).addTo(map);



// Create and assign panes to keep basemap labels of layers
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';



// Load initial layers and legend
positive.addTo(map);
basemap.addTo(map);
legend_positive.addTo(map);



// Create eventLayer for legends upon layer change
currentLegend = legend_positive;

map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === 'Cases') {
        map.removeControl(currentLegend );
        currentLegend = legend_positive;
        legend_positive.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Case Rate') {
        map.removeControl(currentLegend );
        currentLegend = legend_positive_pc;
        legend_positive_pc.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();

    }
    else if  (eventLayer.name === 'Deaths') {
        map.removeControl(currentLegend );
        currentLegend = legend_death;
        legend_death.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();

    }
    else if  (eventLayer.name === 'Death Rate') {
        map.removeControl(currentLegend );
        currentLegend = legend_death_pc;
        legend_death_pc.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Percent Positive') {
       map.removeControl(currentLegend );
        currentLegend = legend_percent;
        legend_percent.addTo(map);
		////healthcare.bringToFront();	
		vzcta.bringToFront();		
    }
    else if  (eventLayer.name === "Total Tests<br><br><b>CDC Social Vulnerability Index (<a href='https://svi.cdc.gov/index.html' target=_blank>?</a>)</b>") {
       map.removeControl(currentLegend );
        currentLegend = legend_total;
        legend_total.addTo(map);
		////healthcare.bringToFront();	
		vzcta.bringToFront();		
    }
    else if  (eventLayer.name === 'Overall Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_overall;
        legend_SVI2018_overall.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Socioeconomic Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme1;
        legend_SVI2018_theme1.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Household Composition & Disability Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme2;
        legend_SVI2018_theme2.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Minority Status & Language Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme3;
        legend_SVI2018_theme3.addTo(map);
		////healthcare.bringToFront();		
		vzcta.bringToFront();
    }
    else if  (eventLayer.name === 'Housing Type & Transportation Vulnerability') {
       map.removeControl(currentLegend );
        currentLegend = legend_SVI2018_theme4;
        legend_SVI2018_theme4.addTo(map);
		////healthcare.bringToFront();
		vzcta.bringToFront();
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
  
  

// Assign layers
var underlays = {
    "Cases": positive,
    "Case Rate": positive_pc,
    "Deaths": death,
    "Death Rate": death_pc,	
    "Percent Positive": percent_pc,	
    "Total Tests<br><br><b>CDC Social Vulnerability Index (<a href='https://svi.cdc.gov/index.html' target=_blank>?</a>)</b>": total,
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
    "Vulnerable Zip Codes": vzcta,
};





//Render Layer Control & Move to Sidebar
var layerControl = L.control.layers(underlays, overlays, {position: "topleft",collapsed: true}).addTo(map);
  });



// Assign popupTemplates
var popupTemplate_positive = document.querySelector('.popupTemplate_positive').innerHTML;
//var popupTemplate_sdi = document.querySelector('.popupTemplate_sdi').innerHTML;
var popupTemplate_SVI2018_theme1 = document.querySelector('.popupTemplate_SVI2018_theme1').innerHTML;
var popupTemplate_SVI2018_theme2 = document.querySelector('.popupTemplate_SVI2018_theme2').innerHTML;
var popupTemplate_SVI2018_theme3 = document.querySelector('.popupTemplate_SVI2018_theme3').innerHTML;
var popupTemplate_SVI2018_theme4 = document.querySelector('.popupTemplate_SVI2018_theme4').innerHTML;