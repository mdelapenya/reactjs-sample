import React from 'react';

var LogoVerticalWhite = require('../logo/logo.jsx');
var Geolocalizer = require('../geolocalizer/geolocalizer.jsx');
var Slider = require('../slider/slider.jsx');

var Home = React.createClass ({
  render: function () {
    return (
      <main className="ktg-home">
        <header className="ktg-home__header">
          <h1 className="ktg-home__title">katanga</h1>
          <LogoVerticalWhite />
        </header>
        <form id="ktg-form-metersAround">
        <Slider />
         <Geolocalizer />
        </form>
      </main>
    );
  }
});

module.exports = Home;
