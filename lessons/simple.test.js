import {sum, subtract} from "./math.js";
//import {test, expect} from "../setup-globals"

it('sum adds numbers', async () => {
    const result = await sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})

it('subtract subtracts numbers', async () => {
    const result = await subtract(7, 3)
    const expected = 4
    expect(result).toBe(expected)
})

