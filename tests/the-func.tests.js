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

describe('where', function() {
  var listOfPlays = [
    {title: 'Cymbeline', author: 'Shakespeare', year: 1611},
    {title: 'The Tempest', author: 'Shakespeare', year: 1611},
    {title: 'Balls', author: 'Suckah', year: 1610},
    {title: 'FOO', author: 'Shakespeare', year: 1611}
  ];

  var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
   it('Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.', function () {
    expect(listOfPlays, {author: 'Shakespeare', year: 1611});

       var result = func.where(list, {a: 1});

    expect(result.length).toBe(3);
    expect(result[result.length - 1].b).toBe(4);
    result = func.where(list, {b: 2});
    expect(result.length).toBe(2);
    expect(result[0].a).toBe(1);

    result = func.where(list, {a: 1}, false);
    expect(result.length).toBe(3);

  });
});

describe('every', function() {
  it('Returns true if all of the values in the list pass the iterator truth test. Delegates to the native method every, if present', function () {
    expect(func.every([true, 1, null, 'yes'], function (val) { return val == true; })).toBeFalsy();
  });
});

describe('some', function() {
  it('Returns true if any of the values in the list pass the iterator truth test. Delegates to the native method every, if present', function () {
    expect(func.some([true, 1, null, 'yes'], function (val) { return val == true; })).toBeTruthy();
  });
});

describe('compose', function() {
  it('Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).', function () {
    var greet    = function(name){ return 'hi: ' + name; };
    var exclaim  = function(statement){ return statement.toUpperCase() + '!'; };
    var welcome = func.compose(greet, exclaim);
    expect(welcome('moe')).toBe('hi: MOE!');
  });
});


