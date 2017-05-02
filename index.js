const startsWith = function (input, pattern) { return input.indexOf(String(pattern)) === 0 }
const contains = function (input, pattern) { return input.indexOf(String(pattern)) > -1 }

module.exports = function hrefType (href) {
  if (!href || !href.length) return null

  href = href.toLowerCase()

  if (startsWith(href, 'mailto:')) return 'mailto'
  if (startsWith(href, 'tel:')) return 'tel'
  if (startsWith(href, 'sms:')) return 'sms'
  if (startsWith(href, 'https://')) return 'absolute'
  if (startsWith(href, 'http://')) return 'absolute'
  if (contains(href, '://')) return 'protocol'
  if (startsWith(href, '//')) return 'protocolRelative'
  if (startsWith(href, '/')) return 'rooted'
  if (startsWith(href, '#')) return 'fragment'
  return 'relative'
}
