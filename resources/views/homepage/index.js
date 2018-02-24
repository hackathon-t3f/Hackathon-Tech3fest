var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, function(ctx, next) {
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
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
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
