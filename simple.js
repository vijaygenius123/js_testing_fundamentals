import {sum, subtract} from "./math.js";
import {expect} from "./assertion-library.js";

let result, expected

function testSum() {
    result = sum(3, 7)
    expected = 10
    expect(result).toBe(expected)
}

test('sum adds numbers', testSum)

function testSubtract() {
    result = subtract(7, 3)
    expected = 4
    expect(result).toBe(expected)
}

test('subtract subtracts numbers', testSubtract)


function test(title, callback) {
    try {
        callback()
        console.log(`✓ ${title}`)
    } catch (err) {
        console.log(`✗ ${title}`)
        console.error(err)
    }
}
