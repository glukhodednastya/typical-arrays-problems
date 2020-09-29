
exports.min = function min (array) {
  if (array && array.length != 0) {
    var minimum = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
    }
    return minimum;
  } else {
    return 0;
  };
};

exports.max = function max (array) {
  if (array && array.length != 0) {
    var maximum = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }
    return maximum;
  } else {
    return 0;
  };
};

exports.avg = function avg (array) {
  if (array && array.length != 0) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length;
  } else {
    return 0;
  };
};
