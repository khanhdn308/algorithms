function nonRepeatSubstring(str: string) {
    let start = 0;
    let maxLength = 0;
    const charIndex: Record<string, number> = {};

    for (let end = 0; end < str.length; end++) {
        const char = str.charAt(end);

        // Duplication detected
        if (char in charIndex) {
            console.log(`Duplicated found at ${end}, comparing ${start} and ${charIndex[char] + 1}`)
            start = Math.max(start, charIndex[char] + 1);
        }
        charIndex[char] = end;
        const len = end - start + 1;
        maxLength = Math.max(maxLength, len);
    }

    console.log(maxLength)
}

nonRepeatSubstring('pwwkew'); // 3
// nonRepeatSubstring('abcabcbb'); // 3
// nonRepeatSubstring('bbbbb'); // 1