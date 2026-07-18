class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = {};

        for(let i=0; i<nums.length; i++){
            let curr = nums[i];
            let need = target - curr;

            if(indices[need] !== undefined){
                return [indices[need], i];
            }

            indices[curr] = i;
        }
        return [];
    }
}


/*

1: create hash map store the value and index of each array
2: target - num[i]
3: check if the complement exist in the hash map
4: if it does, return indices of the current element and it's complement
5: if no such pair if found, retuen empty array
 */
