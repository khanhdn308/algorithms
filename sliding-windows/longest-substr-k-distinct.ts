function longestSubstringWithKdistinct(str: string, k: number) {
    let start = 0;
    let max = 0;
    let charFreq: Record<string, number> = {};

    for (let end = 0; end < str.length; end++) {
        const endChar = str.charAt(end);
        if(!(endChar in charFreq)) {
            charFreq[endChar] = 0;
        }
        charFreq[endChar]++;
        
        while(Object.keys(charFreq).length > k) {
            const startChar = str.charAt(start);
            charFreq[startChar]--;
            if(charFreq[startChar] === 0) {
                delete charFreq[startChar];
            }
            start++;
        }
        max = Math.max(max, end - start + 1);
    }
    return max;
}

console.log(longestSubstringWithKdistinct("araaci", 2))