var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function (pictures) {
  var el = yo`<div class="mainInfo">
    <div class="row mainInfoMap">
      <div class="col s12 offset-m1 l6 offset-l3 mainInfoMap">
        <div id="map"></div>
      </div>
    </div>
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <div class="chartAir">
                <canvas id="myChart" width="150" height="150"></canvas>
            </div>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Card Title <i class="fa fa-bars" aria-hidden="true"></i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Card Title <i class="fa fa-times" aria-hidden="true"></i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>

  </div>`;

  return layout(el);
}
