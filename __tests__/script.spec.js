let { reverseNumber, alphabetize, firstLetterUppercase, isPrime, unique, secondHighestAndLowest, bubleSort, checkReversePrime } = require("../script.js")

describe("learn how toBe() work", () => {
    test("reverse a number", () => {
        expect(reverseNumber(123)).toBe(321)
    }), 
    test("alphabetize a string", () => {
        expect(alphabetize("webmaster")).toBe("abeemrstw")
    }), 
    test("Upper Case The First Letter Of Every Word Like This", () => {
        expect(firstLetterUppercase(firstLetterUppercase("the quick brown fox"))).toBe("The Quick Brown Fox")
    }), 
    test("check is a number is a prime number", () => {
        expect(isPrime(5)).toBe("5 is a prime number")
    })
    test("check that a number is NOT a prime number", () => {
        expect(isPrime(6)).toBe("6 is not a prime number")
    })
    test("returns only the unique characters of a string", () => {
        expect(unique("thequickbrownfoxjumpsoverthelazydog")).toBe("thequickbrownfxjmpsvlazydg")
    })
})

describe("learn how toHaveLength() works", () => {
    test("reverse a number should return the same length", () => {
        let input = 123
        expect(reverseNumber(input).toString()).toHaveLength(3)
    }), 
    test("the alphabetized string should have the same length of the input string", () => {
        let input = "webmaster"
        expect(alphabetize(input)).toHaveLength(input.length)
    }), 
    test("the upper cased phrase should have the same length of the previous cased phrase", () => {
        let input = "the quick brown fox"
        expect(firstLetterUppercase(input)).toHaveLength(input.length)
    }), 
    test("returns only 2 numbers from array, the second hightest and the second lowest", () => {
        let input = [1, 2, 3, 4, 5]
        expect(secondHighestAndLowest(input)).toHaveLength(2)
    }), 
    test("should return am array of the same length", () => {
        let input = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
        expect(bubleSort(input)).toHaveLength(input.length)
    })
})

describe("learn how toBeTruthy() works", () => {
    test("should return a truthy value", () => {
        let input = 123; 
        expect(reverseNumber(input)).toBeTruthy()
    }), 
    test("should return a truthy value", () => {
        let input = "webmaster" 
        expect(alphabetize(input)).toBeTruthy()
    }), 
    test("should return a truthy value", () => {
        let input = "the quick brown fox"
        expect(firstLetterUppercase(input)).toBeTruthy()
    }), 
    test("should return a truthy value", () => {
        let input = 5; 
        expect(isPrime(input)).toBeTruthy()
    }), 
    test("should return a truthy value", () => {
        let input = "thequickbrownfoxjumpsoverthelazydog"
        expect(unique(input)).toBeTruthy()
    }), 
    test("should return a truthy value", () => {
        let input = [1, 2, 3, 4, 5] 
        expect(secondHighestAndLowest(input)).toBeTruthy()
    }), 
    test("should return a truthy value", () => {
        let input = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
        expect(bubleSort(input)).toBeTruthy()
    })
})

describe("learn how toHaveBeenCalled() works", () => {
    test("find out if the function calls the callback", () => {
        let callback = jest.fn()
        checkReversePrime(callback, 23)
        expect(callback).toHaveBeenCalled()
    })
})

describe("learn how toHaveReturned() works", () => {
    test("find out if the function returned something", () => {
        let callback = jest.fn(() => true)
        callback()
        expect(callback).toHaveReturned()
    })
})