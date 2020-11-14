


export function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

export  async function test(title, callback) {
    try {
        await callback()
        console.log(`✓ ${title}`)
    } catch (err) {
        console.log(`✗ ${title}`)
        console.error(err)
    }
}
