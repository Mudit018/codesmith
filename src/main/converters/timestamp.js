const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/**
 * Check leap year
 *
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
  if (year % 100 === 0) return year % 400 === 0
  return year % 4 === 0
}

/**
 * Convert UNIX timestamp to ISO date-time
 *
 * @param {string} timestamp - UNIX timestamp
 * @returns {string}
 */
function TimestampToIso(timestamp_raw) {
  let _timestamp = parseInt(timestamp_raw, 10)
  let _time = _timestamp % 86400
  let hours = Math.floor(_time / 3600)
  let minutes = Math.floor((_time % 3600) / 60)
  let seconds = (_time % 3600) % 60

  let days = Math.floor(_timestamp / 86400)
  let year = 1970
  while (true) {
    let _leap = 1 ? isLeapYear(year) : 0
    if (_leap && days < 366) {
      break
    }
    if (!_leap && days < 365) {
      break
    }
    days -= 365 + _leap
    year++
  }

  let _leap = 1 ? isLeapYear(year) : 0
  let month = 0
  while (month < 12) {
    if (month === 1) {
      if (days < MONTH_DAYS[month] + _leap) {
        break
      }
      days -= MONTH_DAYS[month] + _leap
    } else {
      if (days < MONTH_DAYS[month]) {
        break
      }
      days -= MONTH_DAYS[month]
    }
    month++
  }

  year = String(year).padStart(2, '0')
  month = String(month).padStart(2, '0')
  days = String(days).padStart(2, '0')
  hours = String(hours).padStart(2, '0')
  minutes = String(minutes).padStart(2, '0')
  seconds = String(seconds).padStart(2, '0')

  return `${year}-${month}-${days} ${hours}:${minutes}:${seconds}`
}

/**
 * Convert ISO date-time format to UNIX timestamp
 *
 * @param {string} iso - Date-time in the format 'YYYY-MM-DD HH:MM:SS'
 * @returns {number}
 */
function IsoToTimestamp(iso) {
  let _parts = iso.split(' ')
  const [year, month, day] = _parts[0].split('-').map((x) => parseInt(x, 10))
  const [hours, minutes, seconds] = _parts[1].split(':').map((x) => parseInt(x, 10))
  result = 0

  for (let i = 1970; i < year; i++) {
    if (isLeapYear(i)) {
      console.log(i)
      result++
    }
    result += 365
  }

  for (let i = 0; i < month - 1; i++) {
    if (i == 1 && isLeapYear(year)) {
      result++
    }
    result += MONTH_DAYS[i]
  }

  result += day - 1
  result *= 86400
  result += hours * 3600 + minutes * 60 + seconds

  return result
}

export { TimestampToIso, IsoToTimestamp }
