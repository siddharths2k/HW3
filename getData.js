var fetch = require('node-fetch');

var url = 'https://api-v3.mbta.com/vehicles?api_key=36a4d4c5e30343c5a6a1a2f71aad5f4fbdfd&filter[route]=1&include=trip';

var data = function(){
    fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){console.log(json);})

};

setInterval(data, 15000);