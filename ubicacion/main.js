// Código JavaScript para el mapa (sin funcionalidad real sin API Key)
function initMap() {
    // Coordenadas de la ubicación (Pamplona, España)
    var ubicacion = { lat: 42.8125, lng: -1.6458 };
    
    // Crear mapa centrado en la ubicación
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: ubicacion
    });
    
    // Marcador en la ubicación
    var marker = new google.maps.Marker({
        position: ubicacion,
        map: map
    });
}
