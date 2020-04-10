const groupAnagrams = (strs) => {
    const map = {}
    
    for (const str of strs) {
        key = [...str].sort().join('')
        
        if (!map[key]) {
            map[key] = []
        }
        map[key].push(str)
        
    }
    return Object.values(map)
}