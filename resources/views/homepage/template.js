var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function (pictures) {
  var el = yo`<div class="mainInfo">
    <div class="row selctContainer">
        <select id="select">
          <option value="NULL">Selecciona tu barrio</option>
          <option value="CENTRO">Centro</option>
          <option value="ARGANZUELA">Arganzuela</option>
          <option value="RETIRO">Retiro</option>
          <option value="SALAMANCA">Salamanca</option>
          <option value="CHAMARTIN">Chamartin</option>
          <option value="TETUAN">Tetuan</option>
          <option value="CHAMBERI">Chamberi</option>
          <option value="FUENCARRAL-EL PARDO">Fuencarral-El pardo</option>
          <option value="MONCLOA-ARAVACA">Moncloa aravaca</option>
          <option value="LATINA">Latina</option>
          <option value="CARABANCHEL">Carabanchel</option>
          <option value="USERA">Usera</option>
          <option value="PUENTE DE VALLECAS">Puente de vallecas</option>
          <option value="MORATALAZ">Moratalaz</option>
          <option value="CIUDAD LINEAL">Ciudad lineal</option>
          <option value="HORTALEZA">Hortaleza</option>
          <option value="VILLAVERDE">Villaverde</option>
          <option value="VILLA DE VALLECAS">Villa de vallecas</option>
          <option value="VICALVARO">Vicalvaro</option>
          <option value="SAN BLAS-CANILLEJAS">San blas-Canillejas</option>
        </select>
    </div>
    <div class="row mainInfoMap">
      <div class="col s12 offset-m1 l6 offset-l3 mainInfoMap">
        <div id="map"></div>
      </div>
    </div>
    <div id="chartMain"></div>

    <div id="card-list">
    </div>
  </div>`;

  return layout(el);
}
