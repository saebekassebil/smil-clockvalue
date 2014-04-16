# smil-clockvalue

Parse and validate a SMIL clock value as defined [in the spec](http://www.w3.org/TR/2001/REC-smil20-20010807/smil-timing.html#Timing-ClockValueSyntax)

Returns the parsed clock value in milliseconds

## Examples
```js
var clockvalue = require('smil-clockvalue');

// 3.2 hours = 3 hours and 12 minutes
clockvalue('3.2h') == 11520000

// 45 minutes
clockvalue('45min') == 2700000

// 50 hours, 10 seconds and 250 milliseconds
clockvalue('50:00:10.25') == 180010250

// 2 minutes and 33 seconds
clockvalue('02:33') == 153000

// Default metric is seconds
clockvalue('12.467') == 12467
```