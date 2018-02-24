var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, asyncLoad, function(ctx, next) {
    title('breeze');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template());
});

window.initMap = function() {
    var uluru = {
        lat: 40.4169335,
        lng: -3.7083759
    };
    window.myMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function addGraph(data) {
    var dataArray = Object.keys(data);
    empty(document.getElementById('chartMain'));
    $("#chartMain").append('<div class="card-panel" style="margin: 10px 10px; padding: 10px"><div id="chartContent"><canvas id="myChart" width="150" height="150"></canvas></div></div>')
    var context = document.getElementById("myChart").getContext('2d');
    var myLineChart = new Chart(context, {
        type: 'line',
        data: {
            labels: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'],
            datasets: [{
                data: dataArray,
                label: "Madrid",
                borderColor: "#3e95cd",
                fill: false
            }]
        },
        options: {
            legend: {
                display: false
            },
            maintainAspectRatio: false,
        }
    });
}

async function asyncLoad(ctx, next) {
    try {
        // ctx.pictures = await fetch('/api/pictures').then(res => res.json());
        setTimeout(function() {

            $("#select").change(function() {
                var str = "";
                $("select option:selected").each(function() {
                    str = $(this).valueOf()[0].value;
                });


                $.get("api/greenzones/" + str, function(data) {
                    addGraph(data.air)
                    empty(document.getElementById('card-list'));
                    var bounds = new google.maps.LatLngBounds();
                    if (data.greenzones[0].latitude) {
                        if (window.markers) {
                            markers.forEach(function(itemMarker) {
                                itemMarker.setMap(null);
                            });
                            markers = [];
                        } else {
                            window.markers = [];
                        }
                    }
                    data.greenzones.forEach(function(item, index) {
                        $("#card-list").append(`<div class="card">
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">${item.name} <i class="fa fa-bars" aria-hidden="true"></i></span>
                              <p><a href="#">${item.street}</a></p>
                            </div>
                            <div class="card-reveal">
                              <span class="card-title grey-text text-darken-4">Card Title <i class="fa fa-times" aria-hidden="true"></i></span>
                              <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>`);
                        if (item.latitude) {
                            var myLatlng = new google.maps.LatLng(item.latitude, item.longitude);
                            var marker = new google.maps.Marker({
                                position: myLatlng,
                                title: item.name,
                                icon: 'runner_opt.png'
                            });
                            markers.push(marker);
                            marker.setMap(myMap);
                            bounds.extend(myLatlng);
                        }
                    });
                    myMap.fitBounds(bounds);
                });
            });
        }, 1000);

        next();
    } catch (err) {
        return console.log(err);
    }
}


//
// function loadPictures(ctx, next) {
//   request
//     .get('/api/pictures')
//     .end(function (err, res) {
//       if (err) return console.log(err);
//
//       ctx.pictures = res.body;
//       next();
//     })
// }
//
// function loadPicturesAxios(ctx, next) {
//   axios
//     .get('/api/pictures')
//     .then(function (res) {
//       ctx.pictures = res.data;
//       next();
//     })
//     .catch(function (err) {
//       console.log(err);
//     })
// }
//
// function loadPicturesFetch(ctx, next) {
//   fetch('/api/pictures')
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (pictures) {
//       ctx.pictures = pictures;
//       next();
//     })
//     .catch(function (err) {
//       console.log(err);
//     })
// }
//
// async function asyncLoad(ctx, next) {
//   // try {
//   //   ctx.pictures = await fetch('/api/pictures').then(res => res.json());
//   //   next();
//   // } catch (err) {
//   //   return console.log(err);
//   // }
// }
