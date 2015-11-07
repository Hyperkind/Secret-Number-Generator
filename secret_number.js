'use strict';
module.exports = function() {

  var secretNumber = (Math.floor(Math.random() * 1000001 ));

  var ranSecretNumber = function () {
    return secretNumber;
  };
  return ranSecretNumber;
};

// Jessie's example
// var secretNumber;
// return function () {
// return secretNumber = secretNumber || Math.floor(Math.random() * 1000001);
//    first run of this line since secretNumber is undefined will run the or " || " to generate the random number
// }; 