simply.title('Hello World!');
simply.vibe('short');

// click
simply.on('singleClick', function(e) {
  simply.subtitle('You pressed the ' + e.button + ' button!');
});

// long click
simply.on('longClick', function(e) {
  simply.subtitle('You held the ' + e.button + ' button!');
});

simply.on('accelTap', function(e) {
  simply.subtitle('You tapped across ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});
