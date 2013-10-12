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


})();