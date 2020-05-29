const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i=0; i<num; i++) {
        maxSum+=arr[i];
    }
    tempSum = maxSum;
    for (let i=num; i<arr.length; i++) {
        tempSum = tempSum-arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,5,7,8,2,2,-20,4,-2,55,-30,49], 2));