// this one needs work

const test = ([1,3,5,7,9,11,13], 9);

const binarySearch = (arr, num) => {
    let min = 0;
    let max = arr.length -1;

while (min <= max) {
    let middle = Math.floor((min + max) / 2); 
    let currentElement = arr[middle];

    if (arr[middle] < num) {
        max = middle = 1;
    } else {
        return middle;
        }
    }
return -1;
}

console.log(binarySearch(test));


