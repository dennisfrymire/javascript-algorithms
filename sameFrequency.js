const sameFrequency = (num1, num2) => {
    const str1 = num1.toString()
    const str2 = num2.toString()
    const obj1 = {}
    const obj2 = {}
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        let number = str1[i];
        obj1[number] ? obj1[number] += 1 : obj1[number] = 1;
    }
    for (let i = 0; i <str2.length; i++) {
        let number = str2[i];
        obj2[number] ? obj2[number] += 1 : obj2[number] =1;
    }
    for (let num in obj1) {
        if(obj1[num] !== obj2[num]) {
            return false
        }
    }
    return true
}
  console.log(sameFrequency(81, 81))