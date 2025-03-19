function countOccurrences(arr){
    const result = {};

    for(let num of arr){
        result[num] = (result[num] || 0) + 1;
    }

    return result;
}

const input = [3, 4, 3, 5, 3, 6];

const output = countOccurrences(input);
console.log(JSON.stringify(output, null, 0)); // {"3":3,"4":1,"5":1,"6":1}
console.log(output);