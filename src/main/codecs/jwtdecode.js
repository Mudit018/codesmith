import { jwtDecode } from 'jwt-decode'

/**
 * @param {string} jwt
 * @returns {object}
 */
function decodeJwt(jwt) {
  const header = jwtDecode(jwt, { header: true })
  const payload = jwtDecode(jwt)

  return {
    header,
    payload
  }
}

export { decodeJwt }
