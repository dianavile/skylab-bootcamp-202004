"use strict";

describe("Arroz.prototype.map", function () {
  it("should iterate on each numeric element and  return a new instance with each value multiplied by 10", function () {
    var array = new Arroz(1, 2, 3);
    var indexes = [];
    var arrays = [];

    var result = array.map(function (element, index, array) {
      indexes.push(index);
      arrays.push(array);

      return element * 10;
    });

    expect(result instanceof Arroz).toBeTruthy();
    expect(result).not.toBe(array);
    expect(result.length).toBe(array.length);
    expect(result[0]).toBe(10);
    expect(result[1]).toBe(20);
    expect(result[2]).toBe(30);

    for (var i = 0; i < indexes.length; i++) expect(indexes[i]).toBe(i);

    for (var i = 0; i < arrays.length; i++) expect(arrays[i]).toBe(array);
  });

  it("should iterate on each string element and  return a new instance with each value multiplied by 10", function () {
    var array = new Arroz("a", "b", "c");
    var indexes = [];
    var arrays = [];

    var result = array.map(function (element, index, array) {
      indexes.push(index);
      arrays.push(array);

      return element.toUpperCase();
    });

    expect(result instanceof Arroz).toBeTruthy();
    expect(result).not.toBe(array);
    expect(result.length).toBe(array.length);
    expect(result[0]).toBe("A");
    expect(result[1]).toBe("B");
    expect(result[2]).toBe("C");

    for (var i = 0; i < indexes.length; i++) expect(indexes[i]).toBe(i);

    for (var i = 0; i < arrays.length; i++) expect(arrays[i]).toBe(array);
  });

  it("If you dont declare a callback typeError:not a function must alert the user", function () {
    var array = new Arroz(1, 2, 4);

    expect(function () {
      array.every();
    }).toThrowError(TypeError, "undefined is not a function");
    expect(function () {
      array.every(1);
    }).toThrowError(TypeError, "1 is not a function");
    expect(function () {
      array.every(false);
    }).toThrowError(TypeError, "false is not a function");
  });
});
