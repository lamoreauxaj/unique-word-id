const randomWords = require("random-words")

const idsUsed = new Set()

module.exports = (settings) => {
  let count = 0
  let id = randomWords(settings)
  while (idsUsed.has(id) && count++ < 1000) {
    id = randomWords(settings)
  }
  if (count >= 1000) {
    throw new Error("Unable to find unique id")
  }
  idsUsed.add(id)
  return id
}
