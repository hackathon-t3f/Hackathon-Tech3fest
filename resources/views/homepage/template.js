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
  </div>`;

  return layout(el);
}
