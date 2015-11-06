'use strict';
module.exports = function() {

  var secretNumber = (Math.floor(Math.random() * 1000000 ));

  var ranSecretNumber = function () {
    return secretNumber;
  };

  return ranSecretNumber;

};