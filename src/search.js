function search(data, target) {
    //get length of array
    let len = data.length
    //get the block size for the jump
    let step = Math.floor(Math.sqrt(len))
    let blockStart = 0
    let currentStep = step

    // sort the data ??

    while (data[Math.min(currentStep, len) -1 ] < target) {
        //if we havent found the block, move to next block
        blockStart = currentStep 
        currentStep += step
        // if the next nblock is bigger then the array, target doesnt exist, return -1
        if(blockStart >= len) {
            return -1 
        } 
    }

    //search in the block until we find the possible index of target
    while (data[blockStart] < target) {
        blockStart++
        // if we reach next block target doesnt exist
        if(blockStart == Math.min(currentStep, len)) {
            return -1
        }
    }

    // check if the element is the target if not tearget doesnt exist
    if(data[blockStart] == target) {
        return blockStart
    } else {
        return -1
    } 

}


function sortData() {

}



function binarySearch(data, searchTerm) {
    //sort the array
    //set low, midle and high index
    let lowIndex = 0
    let highIndex = data.length -1
    let midIndex = Math.floor((lowIndex + highIndex) / 2)
    //if the element at middle index is target, return middle index
    // if target is less then middle element, set high index to the middle index -1
    // if target is greater than the middle element, set low index to middle index +1
    //repeat until element is found

}