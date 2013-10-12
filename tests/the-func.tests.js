/*global describe: true, func: true, it: true, expect: true */
/*jslint sloppy: true*/

describe('intersection', function() {
  it('returns the elements common to all passed arrays', function() {
    expect(func.intersection([1, 2, 1, 3], [101, 3, 2, 1, 10], [3, 2, 1])).toEqual([1, 2, 3]);
    expect(func.intersection([1, 2, 2, 2], [1, 3, 2, 2, 10], [1, 2, 2])).toEqual([1, 2]);
    expect(func.intersection([],[])).toEqual([]);
  });
});

describe('union', function() {
  it('returns the unique element aggregation of all passed arrays', function() {
    expect(func.union([1, 2, 1, 3], [101, 3, 2, 1, 10], [3, 2, 1]).sort()).toEqual([1, 2, 3, 10, 101].sort());
    expect(func.union([1, 2], [3, 4], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('reduce', function () {
  it('boils down a list of values into a single value', function () {
    expect(func.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0)).toEqual(6);
  });
});

describe('zip', function () {
  it('Merges together the values of each of the arrays with the values at the corresponding position', function () {
    expect(func.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])).toEqual([['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]);
  });
});

describe('find', function() {
  it('Looks through each value in the list, returning the first one that passes a truth test (iterator), or undefined if no value passes the test', function () {
    expect(func.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; })).toBe(2);
  });
});
