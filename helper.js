// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
export const ucFirst = string => {
  return string[0].toUpperCase() + string.substring(1)
}

// TLDR; ALL_CAPS -> AllCaps
export const SnakeCaseCapsToPascalCase = str => {
  return str
    .toLowerCase()
    .split('_')
    .map(i => ucFirst(i))
    .join('')
}

// https://gist.github.com/codeguy/6684588#gistcomment-2759673
export const sluggify = (str, separator = '_') => {
  str = str.trim()
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  return str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, '') // trim - from end of text
    .replace(/-/g, separator)
}
