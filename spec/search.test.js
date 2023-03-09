describe('bubbleSort', () => {
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