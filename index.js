var toAdd = 23

function summer (sumVal) {
  return function (toAdd) {
    if (!toAdd) throw new Error('trying to pull a fast two?')
    return sumVal + toAdd
  }
}

module.exports = summer