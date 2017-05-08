//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/controllers/launchpad.js
//

'use strict';

const React = require('react');

// Launchpad -------------------------------------------------------------------
class Launchpad extends React.Component {

  render() {
    return (
      <div>
        <h1>Everybody's gotta start somewhere...</h1>
        <p>Might as well be here.</p>
        <button>Click me </button>
      </div>
    )
  }

}

module.exports = { Launchpad : Launchpad };
