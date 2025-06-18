function smallestSubarrayWithGivenSum (arr: number[], k: number) {
    let min = Number.MAX_VALUE;
    let sum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        
        while (sum >= k) {
            const size = end - start + 1;
            // console.log(`Size of window = ${size}`)
            if (size < min) {
                min = size;
            }

            sum -= arr[start];
            start++;
        }
    }
    if (min === Number.MAX_VALUE) {
        min = 0;
    }
    console.log(min);
}

smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7)//2
// smallestSubarrayWithGivenSum([2, 1, 5, 2, 8], 7)//1
// smallestSubarrayWithGivenSum([3, 4, 1, 1, 6], 8)//3