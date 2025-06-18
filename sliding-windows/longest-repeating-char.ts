function characterReplacement(s: string, k: number): number {
    let start = 0;
    let maxLength = 0;
    let maxRepetitionCount = 0;
    const charFreq: Record<string, number> = {};

    for (let end = 0; end < s.length; end++) {
        // Update the character frequency map
        const char = s.charAt(end);
        if (charFreq[char] === undefined) {
            charFreq[char] = 0;
        }
        charFreq[char] = charFreq[char] + 1;
        // Is this character the one with maximum repetition count yet
        maxRepetitionCount = Math.max(maxRepetitionCount, charFreq[char]);

        const subStringLen = end - start + 1;
        // We can replace k characters to make a valid substring, Ex: aaabbaa, 2 => aaaaaaa, 2 replacement
        // When string lenth - max repetition count > k => cannot perform replace ex: aaabbaab, 2: 8 - 5 > 2
        // We need to trim the string from start
        if (subStringLen - maxRepetitionCount > k) {
            console.log(`Start trimming from ${start}`);
            const startChar = s.charAt(start);
            charFreq[startChar] = charFreq[startChar] - 1;
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);

    }

    return maxLength;
};

// console.log(characterReplacement('aabccbb', 2))
console.log(characterReplacement('AABABBA', 1));