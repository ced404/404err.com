simply.title('Hello World!');
simply.vibe('short');


function geolocate () {
  navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
        'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
    ajax({ url: weatherUrl, type: 'json' }, function(data) {
      simply.text({ title: data.name, subtitle: data.main.temp });
    });
  });
}



// click
simply.on('singleClick', function(e) {
  
  simply.subtitle('You pressed the ' + e.button + ' button!');
  
  geolocate();
});

// long click
simply.on('longClick', function(e) {
  simply.subtitle('You held the ' + e.button + ' button!');
});

simply.on('accelTap', function(e) {
  simply.subtitle('You tapped across ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});
