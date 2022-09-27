export function parseTime(time) {
  if (!(time instanceof Date)) {
    time = new Date(time)
  }
  const y = time.getFullYear()
  let m = time.getMonth() + 1
  const d = time.getDate()
  m = m < 10 ? '0' + m : m
  return `${y}-${m}-${d}`
}
