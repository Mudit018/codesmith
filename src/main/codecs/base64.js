const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

/**
 * Encode string to base64
 *
 * @param {string} input
 * @returns {string}
 */
function base64Encode(input) {
  let output = ''
  let i = 0

  while (i < input.length) {
    const a = input.charCodeAt(i++)
    const b = input.charCodeAt(i++)
    const c = input.charCodeAt(i++)
    const index1 = a >> 2
    const index2 = ((a & 3) << 4) | (b >> 4)
    const index3 = isNaN(b) ? 64 : ((b & 15) << 2) | (c >> 6)
    const index4 = isNaN(c) ? 64 : c & 63

    output +=
      chars.charAt(index1) + chars.charAt(index2) + chars.charAt(index3) + chars.charAt(index4)
  }

  return output
}

/**
 * Decode string from base64
 *
 * @param {string} input - base64 encoded form
 * @returns {string}
 */
function base64Decode(input) {
  let output = ''
  let i = 0

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')

  while (i < input.length) {
    const index1 = chars.indexOf(input.charAt(i++))
    const index2 = chars.indexOf(input.charAt(i++))
    const index3 = chars.indexOf(input.charAt(i++))
    const index4 = chars.indexOf(input.charAt(i++))
    const a = (index1 << 2) | (index2 >> 4)
    const b = ((index2 & 15) << 4) | (index3 >> 2)
    const c = ((index3 & 3) << 6) | index4

    output += String.fromCharCode(a)
    if (index3 !== 64) output += String.fromCharCode(b)
    if (index4 !== 64) output += String.fromCharCode(c)
  }

  return output
}

export { base64Decode, base64Encode }
