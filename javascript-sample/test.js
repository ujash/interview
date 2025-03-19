function splitList(arr, SplitVal){
    let result = []
    for(i=0;i<arr.length;i+=SplitVal){
        result.push(arr.slice(i,i+SplitVal));
    }
    return result;
}

list1 = [1,2,3,4,5,6,7,8,9,10];
SplitVal1 = 3
SplitVal2 = 5
const output1 = splitList(list1, SplitVal1)
const output2 = splitList(list1, SplitVal2)

console.log(output1)
console.log(output2)