import {sum, subtract} from "./math.js";
import {expect} from "./assertion-library.js";

let result, expected

result = sum(3,7)
expected = 10
expect(result).toBe(expected)

