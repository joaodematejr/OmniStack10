module.exports = function parseStringArray(arrayAsString) {
  return arrayAsString.split(',').map(techs => techs.trim())
}