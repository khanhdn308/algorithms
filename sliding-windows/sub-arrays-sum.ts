function findAveragesOfSubarrays(arr: number[], k: number) {
    const result: number[] = [];
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        
        sum += arr[end];

        if (end >= k - 1) {
            result.push(sum/k);

            sum -= arr[start];

            start++;

        }
    }

    return result;
}

const testArr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

console.log(findAveragesOfSubarrays(testArr, k));