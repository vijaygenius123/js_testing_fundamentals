import {sum, subtract} from "./math.js";
import {expect, test} from "./assertion-library.js";


test('sum adds numbers', async () => {
    const result = await sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})

test('subtract subtracts numbers', async () => {
    const result = await subtract(7, 3)
    const expected = 4
    expect(result).toBe(expected)
})

