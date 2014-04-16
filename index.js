module.exports = function(clockvalue) {
  if (typeof clockvalue !== 'string') return;

  clockvalue = clockvalue.trim();
  clockvalue = clockvalue.split(':');

  var metrics = [1000 * 60 * 60, 1000 * 60, 1000, 1];
  var metricsOrder = ['h', 'min', 's', 'ms'];
  
  var startMetric = 3 - clockvalue.length;
  if (clockvalue.length === 1) {
    var last = clockvalue.pop().match(/^(\d+\.?\d*)(h|min|s|ms)?$/);
    if (!last) return;

    clockvalue = [last[1]];
    startMetric = last[2] ? metricsOrder.indexOf(last[2]) : 2;
  }
  
  return clockvalue.reduce(function(old, val, i) {
    return old + val * metrics[i + startMetric];
  }, 0);
};
