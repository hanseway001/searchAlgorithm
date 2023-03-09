describe('binary jump search', () => {
    it('find element in sorted array', () => {
        // const array = [1,2,28,22,29,3,7,4,19,5,24,6,20,8,17,27,9,26,10,11,18,12,16,25,13,23,14,15,21,30]
        const num = 17
        const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        // bubbleSort(array)
        expect(search(array, num)).toEqual(array.indexOf(17))
    })
    it('element not in array', () => {
        const num = 11
        const array = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        // bubbleSort(array)
        expect(search(array, num)).toEqual(-1)
    })
    it('array not givin', () => {
        const num = 20
        const array = []
        // bubbleSort(array)
        expect(search(array, num)).toEqual(-1)
    })
    it('array starts at a higher number then target', () => {
        const num = 1
        const array = [7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        // bubbleSort(array)
        expect(search(array, num)).toEqual(-1)
    })
    it('array ends before the target is found', () => {
        const num = 41
        const array = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
        // bubbleSort(array)
        expect(search(array, num)).toEqual(-1)
    })
    it('target number is a string', () => {
        const num = "10"
        const array = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
        // bubbleSort(array)
        expect(search(array, num)).toEqual(array.indexOf(10))
    })
    it('array and target number are abc letters', () => {
        const num = "g"
        const array = ["a","b","c","d","e","f","g","h","j","k","l"]
        // bubbleSort(array)
        expect(search(array, num)).toEqual(array.indexOf("g"))
    })
    it('array is unsorted', () => {
        const num = 10
        const array = [1,2,28,22,29,3,7,4,19,5,24,6,20,8,17,27,9,26,10,11,18,12,16,25,13,23,14,15,21,30]
        // bubbleSort(array)
        expect(search(array, num)).toEqual(-1)
    })
    // it('test sort', () => {
    //     const array = [3,2,4,1]
    //     // bubbleSort(array)
    //     expect(bubbleSort(array)).toEqual([1,2,3,4])
    // })
    // it('test sort', () => {
    //     const array = [3,2,4,1]
    //     // bubbleSort(array)
    //     expect(bubbleSort(array)).toEqual([1,2,3,4])
    // })
    // it('test null input', () => {
    //     const array = null
    //     expect(bubbleSort()).toEqual()
    // })
    // it('test empty array', () => {
    //     const array = []
    //     expect(bubbleSort(array)).toEqual([])
    // })
    // it('test already sorted array', () => {
    //     const array = [1,2,3,4]
    //     expect(bubbleSort(array)).toEqual([1,2,3,4])
    // })
})