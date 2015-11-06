'use strict';
module.exports = function() {

  var secretNumber = (Math.floor(Math.random() * 1000000 ));
  // sets secretNumber to a random number from 0 - 1000000

  var ranSecretNumber = function () {
    return secretNumber;
  // function that returns secretNumber as the same number every time
  };

  return ranSecretNumber;
  // invokes the function
};