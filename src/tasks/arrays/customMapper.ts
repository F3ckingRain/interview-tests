type callbackType<T,R> = (el: T, index: number, originalArr: T[]) => R

function map<T, R>(arr: T[], callback: callbackType<T, R>) {
    const resultArr = [];

    for (let i =0; i < arr.length; i ++) {
        resultArr.push(callback(arr[i], i, arr))
    }

    return resultArr
};

const testArr = [{a: 3}, '43', 22];

const newArr = map(testArr, (el, index) => ({key: String(el), demo: index + 1}))

console.log(`custom mapper array: ${newArr}`)