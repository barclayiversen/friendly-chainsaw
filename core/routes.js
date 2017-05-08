//

// core/routes.js
//

'use strict';

const Launchpad = require('./controllers/launchpad').Launchpad;
const React     = require('react');
const Route     = require('react-router').Route;
const App       = require('./presentation/app').App;

// Exports ---------------------------------------------------------------------
module.exports = (
  <Route component={ App }>
    <Route path="/foo" component={ () => (<h2>foo</h2>) } />
    <Route path="*" component={ Launchpad } />
  </Route>
);
