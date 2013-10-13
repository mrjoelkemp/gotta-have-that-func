;(function () {
  'use strict';

  var func = {};
  window.func = func;

  func.reduce = function (list, iterator, memo) {
    list.forEach(function (val) {
      memo = iterator(memo, val);
    });

    return memo;
  };

  func.intersection = function () {
    var firstList = arguments[0],
        otherLists = [].slice.call(arguments, 1),
        result = [],

        inOtherLists = function (val, otherLists) {
          return otherLists.filter(function (list) {
            return list.indexOf(val) !== -1;
          }).length === otherLists.length;
        };

    firstList.forEach(function(val) {
      if (inOtherLists(val, otherLists) && result.indexOf(val) === -1) {
        result.push(val);
      }
    });

    return result;
  };

  func.union = function () {
    var result = [];

    [].forEach.call(arguments, function (sublist) {
      sublist.forEach(function (val) {
        if (result.indexOf(val) === -1) result.push(val);
      });
    });

    return result;
  };

  func.zip = function () {
    var mappings = {};

    [].forEach.call(arguments, function (sublist) {
      sublist.forEach(function (val, index) {
        mappings[index] || (mappings[index] = []);
        mappings[index].push(val);
      });
    });

    // Stupid that there's no Object.values
    return Object.keys(mappings).map(function (key) {
      return mappings[key];
    });
  };

  func.find = function (list, iterator) {
    var found = false,
        result;

    list.forEach(function (val) {
      if (! found && (found = iterator(val))) {
        result = val;
      }
    });

    return result;
  };

  func.where = function (list, properties) {
    var keys = Object.keys(properties);

    // Return all objects that have the matching properties with matching values
    return list.filter(function (obj) {
      var allMatched = true;

      keys.forEach(function (key) {
        allMatched = allMatched && obj[key] === properties[key];
      });

      return allMatched;
    });
  };

  func.every = function (list, iterator) {
    var allPassed = true;

    list.forEach(function (val) {
      allPassed = allPassed && iterator(val);
    });

    return allPassed;
  };

  func.some = function (list, iterator) {
    var onePassed = false;

    list.forEach(function (val) {
      onePassed = onePassed || iterator(val);
    });

    return onePassed;
  };

  func.compose = function () {
    var args = arguments;

    return function () {
      var result = args[args.length-1].apply(this, arguments),
          f, i;

      if (args.length > 1) {
        for (i = args.length - 2; i >= 0; i--) {
          f = args[i];
          result = f(result);
        }
      }

      return result;
    };
  };

})();