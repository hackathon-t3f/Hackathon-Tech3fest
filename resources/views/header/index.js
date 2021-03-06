var yo = require('yo-yo');
var translate = require('../translate');
var empty = require('empty-element');

var el = yo`<nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m1">
              <a href="/" class="brand-logo platzigram">breeze</a>
            </div>
            <div class="col s2 m6 push-s10 push-m10">
              <a href="#" class="btn btn-large btn-flat dropdown-button avatar" data-activates="drop-user">
                <img src="avatar.JPG"></i>
              </a>
              <ul id="drop-user" class="dropdown-content">
                <li><a href="#">${translate.message('logout')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>`;

module.exports = function header (ctx, next) {
  var container = document.getElementById('header-container')
  empty(container).appendChild(el);
  next();
}
