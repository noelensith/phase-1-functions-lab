// Code your solution in this file!
//function is used to calculate the distance from HQ in blocks

function distanceFromHqInBlocks(block) {
    let Hq = 42
    if (block < 42)
        return Hq - block
    return block - Hq
}
//We use the function from blocks to calculate the distance from HQ in feet
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}
//We calculate distance travelled in feet
function distanceTravelledInFeet(block, block2) {
    if (block < block2)
        return (block2 - block) * 264
    return (block - block2) * 264
}
//we use earlier function distanceTravelledInFeet() to determine the fareprices
//let = distanceTravelledinFeet() so we don't have to create another equation, 
//which is the same equation for distanceTravelledInFeet()
function calculatesFarePrice(start, destination) {
    let distanceFeet = distanceTravelledInFeet(start, destination)
    if (distanceFeet <= 400) {
        return 0
    }
    else if (distanceFeet > 400
        && distanceFeet < 2000) {
        return (distanceFeet - 400) * 0.02
    }
    else if (distanceFeet > 2000
        && distanceFeet <= 2500) {
        return 25
    }
    else if (distanceFeet > 2500) {
        return 'cannot travel that far'
    }
}