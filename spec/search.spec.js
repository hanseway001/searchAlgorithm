describe('bubbleSort', () => {
    it('test sort', () => {
        const array = [1,2,28,22,29,3,7,4,19,5,24,6,20,8,17,27,9,26,10,11,18,12,16,25,13,23,14,15,21,30]
        // bubbleSort(array)
        expect(bubbleSort(array)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
    })
    it('test sort', () => {
        const array = [3,2,4,1]
        // bubbleSort(array)
        expect(bubbleSort(array)).toEqual([1,2,3,4])
    })
    it('test null input', () => {
        const array = null
        expect(bubbleSort()).toEqual()
    })
    it('test empty array', () => {
        const array = []
        expect(bubbleSort(array)).toEqual([])
    })
    it('test already sorted array', () => {
        const array = [1,2,3,4]
        expect(bubbleSort(array)).toEqual([1,2,3,4])
    })
})