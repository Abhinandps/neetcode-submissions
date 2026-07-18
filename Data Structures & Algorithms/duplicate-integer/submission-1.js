class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const obj = {};
        // for(let n of nums){
        //     if(obj[n]){
        //         return true
        //     } 
        //     obj[n] = true
        // }
        // return false

        return new Set(nums).size < nums.length;
    }
}
