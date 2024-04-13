/**
 * Decimal to Binary
 *
 * @param {string} decimal
 * @returns {string}
 */
function decimalToBinary(decimal) {
  let result = ''
  let num = parseInt(decimal)
  while (num > 0) {
    let rem = num % 2
    result = `${rem}` + result
    num = Math.floor(num / 2)
  }
  return result
}

/**
 * Binary to Decimal
 *
 * @param {string} binary
 * @returns {string}
 */
function binaryToDecimal(binary) {
  let result = 0
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      result += 1 << i
    }
  }
  return `${result}`
}

/**
 * Decimal to Octal
 *
 * @param {string} decimal
 * @returns {string}
 */
function decimalToOctal(decimal) {
  let result = ''
  let num = parseInt(decimal)
  while (num > 0) {
    let rem = num % 8
    result = `${rem}` + result
    num = Math.floor(num / 8)
  }
  return result
}

/**
 * Octal to Decimal
 *
 * @param {string} octal
 * @returns {string}
 */
function octalToDecimal(octal) {
  let decimal = 0
  for (let i = 0; i < octal.length; i++) {
    decimal += (octal[i] - '0') * Math.pow(8, i)
  }
  return `${decimal}`
}

/**
 * Decimal to Hex
 *
 * @param {string} decimal
 * @returns {string}
 */
function decimalToHex(decimal) {
  let result = ''
  let num = parseInt(decimal)
  while (num > 0) {
    let rem = num % 16
    result = `${rem}` + result
    num = Math.floor(num / 16)
  }
  return result
}

/**
 * Hex to Decimal
 *
 * @param {string} hex
 * @returns {string}
 */
function hexToDecimal(hex) {
  let decimal = 0
  for (let i = 0; i < hex.length; i++) {
    decimal += (hex[i] - '0') * Math.pow(16, i)
  }
  return `${decimal}`
}

export {
  decimalToBinary,
  binaryToDecimal,
  decimalToOctal,
  octalToDecimal,
  decimalToHex,
  hexToDecimal
}
