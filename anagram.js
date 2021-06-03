const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    const lookup = [];

    for (let val in str1) {
        let letter = str1[val];
    // if letter exists, increment; otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    

    for (let val in str2) {
        let letter = str2[val];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
    }
    
    console.log(validAnagram('tarber', 'rbtaer'));
