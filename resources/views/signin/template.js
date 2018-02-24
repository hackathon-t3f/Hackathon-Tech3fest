var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

var signinForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Name of the app</h1>
      <form class="signup-form" action="/">
        <div class="section">
          <a class="btn btn-fb hide-on-small-only">Entar con facebook</a>
          <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Entar</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="text" name="username" placeholder="${translate.message('username')}" />
          <input type="password" name="password" placeholder="${translate.message('password')}" />
          <button class="btn waves-effect waves-light btn-signup" type="submit">Entrar</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿No tienes un cuenta?<a href="/signup"> Registrate</a>
    </div>
  </div>
</div>`;

module.exports = landing(signinForm);
