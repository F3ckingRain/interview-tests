// Num is lucky if it's count the same as it

const num = 1234341344;

let dictionary = {};
let result = [];

const numToArr = `${num}`.split('');

for (let i = 0; i < numToArr.length; i++) {
    const char = numToArr[i];

    if (char in dictionary) {
        const count = +dictionary[char as keyof typeof dictionary]

        dictionary = {...dictionary, [char]: count + 1}
    } else dictionary = {...dictionary, [char]: 1}
}

for (const key in dictionary) {
    if (+key === dictionary[key as keyof typeof dictionary]) result.push(+key)
}

console.log(`lucky numbers are: ${result}`)
