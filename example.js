const hrefType = require('.')

hrefType('mailto:zeke@sikelianos.com')  // mailto
hrefType('tel:+15054592942')            // tel
hrefType('sms:+15054592942')            // sms
hrefType('https://example.com')         // absolute
hrefType('http://example.com')          // absolute
hrefType('irc://irc.example.com')       // protocol
hrefType('/foo/bar.html')               // rooted
hrefType('baz/qux.css')                 // relative
