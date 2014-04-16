var parse = require('../');
var test = require('tape');

test('Full clock values', function(t) {
  t.plan(4);
  t.equal(parse('02:30:03'), 9003000);
  t.equal(parse('50:00:10.25'), 180010250);

  t.notOk(parse('20:30:40:50'), 'Should not parse invalid clock values');
  t.notOk(parse('20: 30:4 0'), 'Should not parse invalid clock values');
});

test('Partial clock values', function(t) {
  t.plan(3);
  t.equal(parse('02:33'), 153000);
  t.equal(parse('00:10.5'), 10500);

  t.notOk(parse('00:01.5min'), 'Should not accept metrics in partical values');
});

test('Timecount values', function(t) {
  t.plan(8);
  t.equal(parse('3.2h'), 11520000);
  t.equal(parse('45min'), 2700000);
  t.equal(parse('30s'), 30000);
  t.equal(parse('5ms'), 5);
  t.equal(parse('12.467'), 12467);

  t.notOk(parse('4hours'), 'Should only parse valid metrics');
  t.notOk(parse('4ss'), 'Should only parse valid metrics');
  t.notOk(parse('4s.6'), 'Should only parse valid timecount values');
});
