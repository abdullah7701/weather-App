$(document).ready(function() {
    $('#search-btn').click(function() {
        var city = $('#city-input').val();
        var apiKey = 'a29b8ae43203f0038a1e8085d825d8ac';
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        
        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function(response) {
                // Update UI with current weather data
                displayCurrentWeather(response);
            },
            error: function(xhr, status, error) {
                // Handle API request errors
                console.error(status + ': ' + error);
            }
        });
    });
});

function displayCurrentWeather(data) {
    // Extract relevant data from the API response
    var city = data.name;
    var temperature = Math.round(data.main.temp - 273.15); 
    var weatherDescription = data.weather[0].description;

    // Update UI with current weather information
    $('#current-conditions').html(
        '<h2>Current Weather in ' + city + '</h2>' +
        '<p>Temperature: ' + temperature + '°C</p>' +
        '<p>Description: ' + weatherDescription + '</p>'
    );
}
