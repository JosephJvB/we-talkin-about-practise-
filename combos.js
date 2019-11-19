// https://www.youtube.com/watch?v=sP933WRc4Ug
// get all combinations of items in an array

function getCombos (arry) {
    let result = [[]]
    for (let i = 0; i < arry.length; i++) {
        for (let j = 0, len = result.length; j < len; j++) {
            let next = result[j].concat(arry[i]);
            result.push(next);
        }
    }
    return result;
}

const example = [1, 2, 3, 4, 5];
console.log(getCombos(example))