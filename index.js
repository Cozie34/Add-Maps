// Declare a global variable to store the marker you placed
var placedMarker;

// Initialize and add the map
function initMap() {
    // The location to center the map (latitude and longitude)
    var center = { lat: 40.6151164155229, lng: -79.16106563949656 }; 

    // Create the map with specific options
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Set the initial zoom level
        center: center // Center the map on the specified location
    });

    // Remove all markers from the map
    function clearMarkers() {
        map.overlayMapTypes.clear();
    }

    // Add a marker at the specified location and store it in the global variable
    placedMarker = new google.maps.Marker({
        position: center, // Position of the marker
        map: map, // The map to add the marker to
    });

    // Add an event listener to clear markers when the map is clicked
    google.maps.event.addListener(map, 'click', function() {
        clearMarkers();
    });
}
