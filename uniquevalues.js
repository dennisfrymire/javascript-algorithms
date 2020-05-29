const countUniqueValues = (arr) => {
    // two pointers at index 0 and 1 of array
    let pointer1 = 0;
    let pointer2 = 1;
    // loop through array
    while(pointer2 < arr.length) {
        // check if both pointers are equal to each other
        if (arr[pointer1] === arr[pointer2]){
            pointer2++;
        } else if (arr[pointer1] !== arr[pointer2]) {
            pointer1++;
            arr[pointer1] = arr[pointer2];
            pointer2++;
        }
    } return pointer1 += 1
}
console.log(countUniqueValues([1,2,2,3,3,4,5,5,6,7]))

