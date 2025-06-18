function totalFruits(fruits: number[]) {
    const fruitMap: Record<number, number> = {};
    const MAX_NUMBER_OF_TYPE = 2; // Only maximum of 2 types allowed
    let max = 0;
    let start = 0;

    for (let end = 0; end < fruits.length; end++) {
        // Add fruit to basket
        // Increase the frequency of fruit type in map
        const frequency = fruitMap[fruits[end]] || 0;
        fruitMap[fruits[end]] = frequency + 1;
        
        // When the number of fruit types is greater than allowed, begin remove from start
        while (Object.keys(fruitMap).length > MAX_NUMBER_OF_TYPE) {
            const startType = fruits[start];
            let startFreq = fruitMap[startType] || 0;
            startFreq--;

            fruitMap[startType] = startFreq;
            start++;

            if (startFreq <= 0) {
                delete fruitMap[startType];
            }

        }

        max = Math.max(max, end - start + 1);
    }
    console.log(`Max types of fruits = ${max}`);
}

// totalFruits([1,2,3,2,2]) // 4
// totalFruits([0,1,2,2]) // 3
// totalFruits([3,3,3,1,2,1,1,2,3,3,4]) // 5

