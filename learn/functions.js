function getPyramidArea(length, width, height) {
    let baseArea = length * width;
    let PyramidArea = 1/3 * baseArea * height;
    return PyramidArea;
    //console.log(PyramidArea);
    
}

let area1 = getPyramidArea(2, 2, 3);
let area2 = getPyramidArea(4, 4, 3);
console.log('Area 1 = ' + area1 + ' , Area 2 = ' + area2);