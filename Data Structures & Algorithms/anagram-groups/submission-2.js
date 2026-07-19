class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for(let word of strs){
            const count = {};

            // count charachters
            for(let i=0; i<word.length; i++){
                const char = word[i];

                count[char] = (count[char] || 0 ) + 1;
            }

            // Create signature manually
            const key = word.split("").sort().join();

            // Add words to it's group
            if(!groups.has(key)){
                groups.set(key, []);
            }

            groups.get(key).push(word);
        }

        const result = [];
        for(let group of groups.values()){
            result.push(group);
        }

        return result;
    }

}


//  first approach:

// Compare every word with every other word
// Time: O(n² × k)
// (n = number of words, k = average word length)


// new approch:

// Why this is a better algorithm

// The biggest improvement is not just the code being shorter.

// Your first approach was:

// "Find relationships between every pair."

// Your new approach is:

// "Create an identity for each group and directly place items there."

// This is the common pattern used in many problems:

// Grouping items by property
// Using a hash map for lookup
// Avoiding unnecessary comparisons

// You also removed the need for:

// visited set
// nested loops
// isAnagram() helper




