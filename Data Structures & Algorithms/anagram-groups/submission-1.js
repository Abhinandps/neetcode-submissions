class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length < 1) return []

    const result = [];
    const visited = new Set();

    for(let i = 0; i < strs.length; i++){
        if (visited.has(strs[i])) {
            continue;
        }
        
        const pairs = [];
        pairs.push(strs[i]);
        
        for(let j = 0; j < strs.length; j++){
            
            if( i !== j && this.isAnagram(strs[i], strs[j])){
                pairs.push(strs[j]);
                visited.add(strs[j]);
            }
        }
        visited.add(strs[i]);
        result.push(pairs)
    }

    return result
    }

    isAnagram(str1, str2){

    if(str1.length !== str2.length){
        return false
    }

    const countStr1 = {};
    const countStr2 = {};

    for( let i = 0; i < str1.length; i++){
        countStr1[str1[i]] = (countStr1[str1[i]] || 0 ) + 1;
        countStr2[str2[i]] = (countStr2[str2[i]] || 0 ) + 1;
    }

    for( let key in countStr1){
        if(countStr1[key] !== countStr2[key]){
            return false;
        }
    }
    return true
}
}
