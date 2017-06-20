var toAdd = 23

function summer (sumVal) {
  return function (toAdd) {
    if (!toAdd) throw new Error('trying to pull a fast oneS?')
    return sumVal + toAdd
  }
}

module.exports = summer
