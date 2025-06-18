function maxSubarrayOfSizeK(k: number, arr: number[]) {
    let max = 0;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        if (end >= k - 1) {
            max = Math.max(sum, max);
            sum -= arr[start];
            start++;
        }
    }
    console.log(max);
}

maxSubarrayOfSizeK(3, [2, 1, 5, 1, 3, 2])//9
maxSubarrayOfSizeK(2, [2, 3, 4, 1, 5])//7
