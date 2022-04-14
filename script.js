function reverseNumber(num){
    return parseInt(Array.from(num.toString()).reverse().join(""))
}
console.log(reverseNumber(123))

function alphabetize(string) {
    return Array.from(string).sort().join("")
}
console.log(alphabetize("webmaster"))

function firstLetterUppercase(str){
    let cased = []
    str.split(" ").map(m => {
        let [first, ...rest] = m; 
        cased.push(first.toUpperCase() + rest.join(""))
    })
    return cased.join(" ")
}
console.log(firstLetterUppercase("the quick brown fox"))


function isPrime(n){
    let trys = []
    for(let i = n-1; i>1; i--){
        trys.push(n%i)
    }
    if(trys.includes(0) || n ===1 || n === 0){
        return `${n} is not a prime number`
    } else {
        return `${n} is a prime number`
    }
}

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(4))
console.log(isPrime(6))
console.log(isPrime(8))
console.log(isPrime(10))

console.log(isPrime(29))
console.log(isPrime(31))
console.log(isPrime(37))
console.log(isPrime(41))
console.log(isPrime(47))
console.log(isPrime(53))
console.log(isPrime(59))
console.log(isPrime(61))
console.log(isPrime(67))

function unique(str){
    let letters = []
    Array.from(str).map(l => {
        if(!letters.includes(l)){
            letters.push(l)
        }
    })
    return letters.join("")
}
console.log(unique("thequickbrownfoxjumpsoverthelazydog"))

function secondHighestAndLowest(arr) {
    let sorted = arr.sort((a, b) => a-b)
    let result = [sorted[1], sorted.splice(-2, 1)[0]]
    return result
}
console.log(secondHighestAndLowest([1,2,3,4,5]))

function bubleSort(arr){
    return arr.sort((a, b) => b-a)
}
console.log(bubleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

function checkReversePrime(callback, n){
    result = callback(n)
    return isPrime(result)
}
checkReversePrime(reverseNumber, 23)


exports.reverseNumber = reverseNumber
exports.alphabetize = alphabetize
exports.firstLetterUppercase = firstLetterUppercase
exports.isPrime = isPrime
exports.unique = unique
exports.secondHighestAndLowest = secondHighestAndLowest; 
exports.bubleSort = bubleSort
exports.checkReversePrime = checkReversePrime