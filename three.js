// /* 3. Write a function named twoSum which takes two parameters: nums and target.
// Given an array of integers nums and an integer target, return indices of the two
// numbers such that they add up to the target. You may assume that each input
// would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order */

const input = [1, 3, 10, 11, 13];

function twoSum(array, target) {

for (let i = 0; i < array.length; i++) {

const diffIndex = array.indexOf(target - array[i]);

if (diffIndex >= 0 && diffIndex !== i) {

return [i, diffIndex];

}
}
return []; // no solution found
}

console.log(twoSum(input, 11)); 