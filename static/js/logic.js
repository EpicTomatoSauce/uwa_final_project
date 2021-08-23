// Create Map
// ===========================
// Define satellite, lightmap and outdoorsmap layers for map
var satellitestreetsmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-streets-v11",
    accessToken: API_KEY
    })

var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-v9",
    accessToken: API_KEY
    })

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
    })

var outdoorsmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/outdoors-v11",
    accessToken: API_KEY
    })


// Define a baseMaps object to hold the base layers for the map
var baseMaps = {
    "Satellite Streets": satellitestreetsmap,
    "Satellite": satellitemap,
    "Outdoors": outdoorsmap,
    "Grayscale": lightmap
};

// Create initial map object and set the starting longitude, latitude, zoom level and layers of the map
var myMap = L.map("map", {
    center: [
        -1.601, 34.589
    ],
    zoom: 15,
    layers: [satellitestreetsmap]
});

// Create a layer control, pass in the baseMaps and overlayMaps then add to the map
L.control.layers(baseMaps).addTo(myMap);


// Create markers

var markers = [{
    location: [-1.602777, 34.593360],
    name: "Ca Rainfall Station",
    coords: "-1.602777, 34.593360",
    },
{
    location: [-1.598637, 34.601257],
    name: "Wo Rainfall Station",
    coords: "-1.598637, 34.601257",
},
{
    location: [-1.601361, 34.578168],
    name: "Sy Rainfall Station",
    coords: "-1.601361, 34.578168",
},
{
    location: [-1.592147, 34.581203],
    name: "Wa Rainfall Station",
    coords: "-1.592147, 34.581203",
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < markers.length; i++) {
    var marker = markers[i];
    L.marker(marker.location)
      .bindPopup("<h5>" + marker.name + "</h5> <hr> <h6>Location: " + marker.coords + "</h6>")
      .addTo(myMap);
}

// Create a circle and pass in some initial options
var circle = L.circle([-1.608503, 34.5892], {
    color: "red",
    fillColor: "red",
    fillOpacity: 1,
    radius: 50
}).addTo(myMap);

circle.bindPopup("<h3>" + "Wa Creek Water Level Station" + "</h3>");


