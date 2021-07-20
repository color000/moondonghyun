        function initialize() {
            var Y_point = 37.268115;
            var X_point = 127.000331;
            var zoomLevel = 16;
            var markerTitle = "GROGGERY Restaurant";
            var markerMaxWidth = 300;
            var contentString = '<div>' +
                '<h3>GROGGERY Restaurant</h3>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />' +
                'events and much more about life of our friendly family</p>' +
                '</div>';
            var myLatlng = new google.maps.LatLng(Y_point, X_point);
            var mapOptions = {
                zoom: zoomLevel,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: markerTitle
            });
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: markerMaxWidth
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }