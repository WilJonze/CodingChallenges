// Given an array of integers nums and an integer target, return 
// indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.

 
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// This problem comes from LeetCode, a site that is more geared toward
// problems found in technical interviews. 
// Here I used a for loop a map to find if any two numbers in an array
// could be added to hit the target. map.has, map.set, map.get were new concepts
// for me that I will need to study. I was closer than I thought on my first
// attempt without looking anything up, so a win there I suppose. 

// My Solution: 
let twoSum = function(nums, target) {
    let map = new Map();

    for (let i=0; i < nums.length; i++) {
        let same = target - nums[i]

        if (map.has(same)) {
            return [map.get(same), i]
        }

        map.set(nums[i], i);
    }
    return [];
};