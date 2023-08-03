export function msToTime(s) {
  var ms = s % 1000
  s = (s - ms) / 1000
  var secs = s % 60
  s = (s - secs) / 60
  var mins = s % 60
  var hrs = (s - mins) / 60

  return hrs + ':' + mins + ':' + secs + '.' + ms
}

export function secondsToTime(seconds) {
  let minutes = Math.floor(seconds / 60)
  let extraSeconds = seconds % 60
  let hrs = Math.floor(minutes / 60)
  minutes = minutes % 60
  let min = minutes < 10 ? '0' + minutes : minutes
  let sec = extraSeconds < 10 ? '0' + extraSeconds : extraSeconds
  let time = hrs ? hrs + ':' + min + ':' + sec : min + ':' + sec
  return time
}
