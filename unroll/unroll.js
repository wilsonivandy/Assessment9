function unroll(squareArray) {
    let result = [];
    let top, right, bottom, left;
    let newArr = [... squareArray];

    while (newArr.length > 0) {
        [top, newArr] = takeTop(newArr);
        [right, newArr] = takeRight(newArr);
        [bottom, newArr] = takeBottom(newArr);
        [left, newArr] = takeLeft(newArr);
        result = result.concat(top, right, bottom, left);
    }

    result = result.filter(el => {
        return el !== undefined;
    })

    return result;
}

function takeTop(squareArray) {
    let top = squareArray[0];
    squareArray.shift();
    return [top, squareArray];
}

function takeRight(squareArray) {
    let res = []
    for (let row=0; row < squareArray.length; row++) {
        res.push(squareArray[row].pop());
    }
    return [res, squareArray];
}

function takeBottom(squareArray) {
    if (squareArray.length === 0) {
      return [undefined, squareArray];
    }
    let res = squareArray.pop();
    return [res.reverse(), squareArray];
  }

function takeLeft(squareArray) {
    let res = []
    for (let row=0; row < squareArray.length; row++) {
        res.push(squareArray[row].shift());
    }
    return [res.reverse(), squareArray];
}


module.exports = unroll;
