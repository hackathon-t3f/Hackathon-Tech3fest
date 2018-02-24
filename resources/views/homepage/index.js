var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, asyncLoad, function(ctx, next) {
    title('Platzigram - Signin');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template());
});

window.initMap = function() {
    var uluru = {
        lat: 40.3488673,
        lng: -3.6968806
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
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

function addGraph(data, index){
    var context = document.getElementById("myChart" + index).getContext('2d');
    var myLineChart = new Chart(context, {
        type: 'line',
        data: {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                data: data,
                label: "Africa",
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

            $( "#select" ).change(function() {
                var str = "";
                $( "select option:selected" ).each(function() {
                    debugger
                  str = $( this ).valueOf()[0].value;
                });
                $.get( "api/greenzones/" + str, function( data ) {
                    data.forEach(function(item, index){
                        $( "#card-list" ).append( `<div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <div class="chartAir">
                                    <canvas id="myChart${index}" width="150" height="150"></canvas>
                                </div>
                            </div>
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">${item.name} <i class="fa fa-bars" aria-hidden="true"></i></span>
                              <p><a href="#">${item.street}</a></p>
                            </div>
                            <div class="card-reveal">
                              <span class="card-title grey-text text-darken-4">Card Title <i class="fa fa-times" aria-hidden="true"></i></span>
                              <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>` );
                        addGraph([8, 1, 1, 1, 3, 6, 5, 3, 5, 4], index)
                    });
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
