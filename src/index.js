exports.min = function min(array) {
    if ((!array) || (array.length == 0)) {
        return 0;
    }
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

exports.max = function max(array) {
    if ((!array) || (array.length == 0)) {
        return 0;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

exports.avg = function avg(array) {
    if ((!array) || (array.length == 0)) {
        return 0;
    }
    return array.reduce((summa, arrayItem) => summa += arrayItem, 0) / array.length;
};
